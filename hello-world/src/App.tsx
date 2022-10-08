import { FC } from 'react'
// import logo from './react.svg'
import logo from './assets/react.svg'

import './App.css'

const App: FC = () => {
  // アロー関数を使ってgreetコンポーネントを追加する実験
  const name = "Nobuhiko Yuasa";
  const greet = (name: string) => <p>Hello,{name || "Guest"}!</p>

  // ショートサーキット評価の実験
  const n = Math.floor(Math.random() * 10); //0〜9のランダムな整数
  const threshold = 5;

  // 繰り返し処理の実験
  const list = ['Patty', 'Rolley', 'Bobby'];

  return (
    <div className='App'>

      {/* greetコンポーネント実験 */}
      <h2>{greet(name)}</h2>

      {/* シートサーキット評価の実験 */}
      {n>threshold && (<p>{n}は {threshold} よりも大きい値です</p>)}
      {n>threshold || (<p>{n}は {threshold} 以下の値です</p>)}
      {<p>{n} は {n % 2 === 0 ? '偶数' : '奇数'}です</p>}

      {/* 繰り返し処理の実験 */}
      <ul>
        {list.map((name) =>(
          <li>Hello, {name}!</li>
        ))}
      </ul>

      <header className='App-header'>
        <img src={ logo } className="logo" alt="logo" />
        <h1>Hello world!</h1>
      </header>
    </div>

  );

};

export default App
