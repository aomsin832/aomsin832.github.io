'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './salaf.module.css';

type Card = { id: number; rank: number; suit: number };
type Table = { cards: Card[]; owner: number } | null;
type Game = { hands: Card[][]; turn: number; table: Table; passes: number; finished: number[]; first: boolean; message: string; previous?: number[]; exchange?: { from: number; to: number; count: number }[] };
const suits = ['♣', '♦', '♥', '♠'];
const names = ['You', 'Bot 1', 'Bot 2', 'Bot 3'];
const roles = ['President', 'Vice President', 'Vice Slave', 'Slave'];
const label = (c: Card) => `${['3','4','5','6','7','8','9','10','J','Q','K','A','2'][c.rank]}${suits[c.suit]}`;
const strength = (c: Card) => c.rank * 4 + c.suit;
const validSet = (cards: Card[]) => cards.length > 0 && cards.length <= 4 && cards.every(c => c.rank === cards[0].rank);
function beats(cards: Card[], table: Table) {
  if (!validSet(cards)) return false;
  if (!table) return true;
  const other = table.cards;
  if ((cards.length === 3 && other.length === 1) || (cards.length === 4 && other.length === 2)) return true;
  return cards.length === other.length && Math.max(...cards.map(strength)) > Math.max(...other.map(strength));
}
function deal(previous?: number[]): Game {
  const deck = Array.from({length: 52}, (_, id) => ({ id, rank: Math.floor(id / 4), suit: id % 4 }));
  for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
  const hands = Array.from({length: 4}, (_, p) => deck.slice(p * 13, p * 13 + 13).sort((a,b) => strength(a)-strength(b)));
  if (!previous) return { hands, turn: hands.findIndex(h => h.some(c => c.id === 0)), table: null, passes: 0, finished: [], first: true, message: 'The player with 3♣ starts.' };
  const [king,vp,viceSlave,slave]=previous;
  // Select both compulsory gifts before either player receives cards.
  const topSlave=hands[slave].slice(-2), topVice=hands[viceSlave].slice(-1);
  const gifts=[{from:king,to:slave,count:2},{from:vp,to:viceSlave,count:1}];
  const pending=gifts.filter(x=>x.from===0);
  for (const gift of gifts) if(gift.from!==0) { const cards=hands[gift.from].slice(0,gift.count); hands[gift.from]=hands[gift.from].slice(gift.count); hands[gift.to]=[...hands[gift.to],...cards].sort((a,b)=>strength(a)-strength(b)); }
  for(const [from,to,cards] of [[slave,king,topSlave],[viceSlave,vp,topVice]] as [number,number,Card[]][]) { hands[from]=hands[from].filter(c=>!cards.some(x=>x.id===c.id)); hands[to]=[...hands[to],...cards].sort((a,b)=>strength(a)-strength(b)); }
  return {hands,turn:slave,table:null,passes:0,finished:[],first:false,previous,exchange:pending,message:pending.length ? `Choose ${pending[0].count} card${pending[0].count===1?'':'s'} to exchange.` : `${names[slave]} starts the round.`};
}
function choices(hand: Card[], table: Table, first: boolean) {
  const result: Card[][] = [];
  for (let rank = 0; rank < 13; rank++) {
    const group = hand.filter(c => c.rank === rank);
    for (let mask = 1; mask < 1 << group.length; mask++) {
      const cards = group.filter((_,i) => mask & (1 << i));
      if ((!first || cards.some(c => c.id === 0)) && beats(cards, table)) result.push(cards);
    }
  }
  return result.sort((a,b) => a.length-b.length || Math.max(...a.map(strength))-Math.max(...b.map(strength)));
}
function nextActive(from: number, hands: Card[][]) { for (let n=1;n<=4;n++) { const p=(from+n)%4; if (hands[p].length) return p; } return from; }
function move(g: Game, cards: Card[]): Game {
  const p=g.turn;
  if (cards.length) {
    if ((!g.first || cards.some(c=>c.id===0)) && beats(cards,g.table)) {
      const hands=g.hands.map((h,i)=>i===p?h.filter(c=>!cards.some(x=>x.id===c.id)):h);
      const finished=hands[p].length ? g.finished : [...g.finished,p];
      if (finished.length===3) {
        let order=[...finished,hands.findIndex(h=>h.length>0)];
        const king=g.previous?.[0];
        if (king!==undefined && finished[0]!==king) order=[...order.filter(x=>x!==king),king];
        return {...g,hands,finished:order,table:{cards,owner:p},first:false,message:'Round complete.'};
      }
      return {...g,hands,finished,turn:nextActive(p,hands),table:{cards,owner:p},passes:0,first:false,message:`${names[p]} played ${cards.map(label).join(' ')}.`};
    }
    return {...g,message:'That play does not beat the table, or must include 3♣.'};
  }
  if (!g.table) return {...g,message:'Lead with a card or matching set.'};
  const passes=g.passes+1;
  const active=g.hands.filter(h=>h.length).length;
  const required=active-(g.hands[g.table.owner].length ? 1 : 0);
  if (passes>=required) {
    const lead=g.hands[g.table.owner].length ? g.table.owner : nextActive(g.table.owner,g.hands);
    return {...g,turn:lead,table:null,passes:0,message:`${names[lead]} leads the next trick.`};
  }
  return {...g,turn:nextActive(p,g.hands),passes,message:`${names[p]} passed.`};
}
export default function Salaf() {
  const [game,setGame]=useState<Game|null>(null);
  const [selected,setSelected]=useState<number[]>([]);
  function advance(g: Game) {
    let current=g;
    while(current.turn!==0 && current.finished.length<4) {
      const c=choices(current.hands[current.turn],current.table,current.first)[0];
      current=move(current,c ?? []);
    }
    setGame(current); setSelected([]);
  }
  function exchange() {
    if(!game?.exchange?.length) return;
    const [gift,...remaining]=game.exchange;
    if(selected.length!==gift.count) { setGame({...game,message:`Choose exactly ${gift.count} card${gift.count===1?'':'s'}.`}); return; }
    const cards=game.hands[0].filter(c=>selected.includes(c.id));
    const hands=game.hands.map((h,i)=>i===0?h.filter(c=>!selected.includes(c.id)):i===gift.to?[...h,...cards].sort((a,b)=>strength(a)-strength(b)):h);
    const updated={...game,hands,exchange:remaining,message:`${names[game.turn]} starts the round.`};
    if(remaining.length) { setGame(updated); setSelected([]); } else advance(updated);
  }
  return <main className={styles.page}>
    <Link href="/">←︎ home</Link><p className={styles.eyebrow}>A LITTLE CARD GAME</p><h1>salaf</h1><p className={styles.intro}>Since you’re here, enjoy a game of salaf.</p>
    {!game ? <button className={styles.action} onClick={()=>advance(deal())}>start a game</button> : <>
      <div className={styles.opponents}>{names.slice(1).map((n,i)=><div key={n}><span>{n}</span><small>{game.previous ? roles[game.previous.indexOf(i+1)] : 'PLAYER'}</small><small>{game.hands[i+1].length} cards</small></div>)}</div>
      <section className={styles.table} aria-label="Playing table"><span className={styles.eyebrow}>ON THE TABLE</span><div className={styles.played}>{game.table ? game.table.cards.map(c=><span className={`${styles.card} ${c.suit===1||c.suit===2?styles.red:''}`} key={c.id}>{label(c)}</span>) : <p>A fresh trick</p>}</div></section><p className={styles.status} aria-live="polite">{game.message}</p>
      {game.finished.length===4 ? <section className={styles.results}><p className={styles.eyebrow}>THE ROUND IS COMPLETE</p><h2>The table has spoken.</h2><div className={styles.standings}>{game.finished.map((p,i)=><div key={p}><span>{roles[i]}</span><strong>{names[p]}</strong></div>)}</div><button className={styles.action} onClick={()=>{const next=deal(game.finished); if(next.exchange?.length) {setGame(next);setSelected([]);} else advance(next);}}>next round <span aria-hidden="true">→︎</span></button></section> : <><div className={styles.handHeading}><p className={styles.eyebrow}>{game.exchange?.length ? 'THE EXCHANGE' : 'YOUR HAND'}</p>{game.previous && <span>{roles[game.previous.indexOf(0)]}</span>}</div>{game.exchange?.length ? <p className={styles.exchangeHelp}>Choose {game.exchange[0].count} {game.exchange[0].count===1?'card':'cards'} to give {names[game.exchange[0].to]}.</p> : <p className={styles.exchangeHelp}>Select cards to play · strongest on the left</p>}<div className={styles.hand}>{[...game.hands[0]].sort((a,b)=>strength(b)-strength(a)).map(c=><button key={c.id} className={`${styles.card} ${selected.includes(c.id)?styles.selected:''} ${c.suit===1||c.suit===2?styles.red:''}`} aria-pressed={selected.includes(c.id)} onClick={()=>setSelected(s=>s.includes(c.id)?s.filter(x=>x!==c.id):[...s,c.id])}>{label(c)}</button>)}</div><div className={styles.actions}>{game.exchange?.length ? <button className={styles.action} onClick={exchange}>give cards</button> : <><button className={styles.action} disabled={!selected.length} onClick={()=>advance(move(game,game.hands[0].filter(c=>selected.includes(c.id))))}>play</button><button className={styles.action} disabled={!game.table} onClick={()=>advance(move(game,[]))}>pass</button></>}</div></>}
    </>}
    <p className={styles.note}>First version: singles, pairs, triples and four of a kind. Triples beat singles; four of a kind beats pairs.</p>
  </main>;
}
