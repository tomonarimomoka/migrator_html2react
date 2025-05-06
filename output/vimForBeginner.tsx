import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const VimForBeginner: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  
  <main className="box">
    
    <h1 id="articleTitle">はじめてのvim</h1>
    <div className="right">
      🕓本記事の最終更新日は
      <time id="modify"></time>
      です。
      <script>
        /* 更新日の取得 */
        const last = new Date(document.lastModified);
        const year = last.getFullYear();
        const month = last.getMonth() + 1;
        const date = last.getDate();
        /* 日付を書き換える */
        const target = document.getElementById('modify');
        target.textContent = year + '-' + month + '-' + date;
      </script>
    </div>
    <SubTitle subTitle="vimとは" />
    <p>vimとは、CUIで使えるエディターのことです。</p>
    <p>
      つまり、CMDとかpowershellとかターミナルとかで使えるファイルを書き換えることができるプログラムのことです。
      普通はファイルを開いて、ファイルを編集しますが、コマンドラインでファイルを編集出来ます。
    </p>
        
    <SubTitle subTitle="vimのモードとは？" />
    <p>
      vimにはモードという考え方があります。モードを意識しないと、意図したとおりにコマンドが挙動しないので注意しましょう。
      insertモードのときは、ターミナルの下の方に「-- INSERT --」と表示されます。
    </p>
    <p>
      vimのモードは沢山ありますが、初学者が初めに覚えるべきは以下の2つでしょう。
    </p>
    <ul>      
      <li>insertモード</li>
      <li>normalモード</li>
    </ul>
    <p>
      vimではファイルを編集することが多いかと思いますが、その時にはinsertモードにすることでファイルを編集出来ます。
      <b>insertモードに入るには「i」を入力する</b>だけです。
      insertモードのときは、ターミナルの下の方に「-- INSERT --」と表示されます。
    </p>
    <img src="../素材/vim-insert.png" className="imgSize_90" alt="insertモード">


    <SubTitle subTitle="ファイルを編集する" />
    <ol>
      <li>「i」を押して、insertモードに入る</li>
      <li>ファイルを編集する</li>
      <li>Escキーを押して、insertモードから抜け、normalモードに戻る</li>
      <li>保存するため、<pre><code className="codeBlock">:wq</code></pre>を入力 </li>
      <li>Enterキーを押す</li>
    </ol>

    <SubTitle subTitle="保存してvimモードから抜ける" />
    <ol>
      <li>Eacキーを押す</li>
      <li><pre><code className="codeBlock">:wq</code></pre>を入力 </li>
      <li>Enterキーを押す</li>
    </ol>
    
    <SubTitle subTitle="保存せずにvimモードから抜ける" />
    <ol>
      <li>Eacキーを押す</li>
      <li><pre><code className="codeBlock">:q</code></pre>を入力 </li>
      <li>Enterキーを押す</li>
    </ol>
    
  <SubTitle subTitle="おわりに" />
    <p>
      読んでくださりありがとうございます。vimに怖がらなくて済むことを願っています！
    </p>
  
    <h4>参考</h4>
    2020 , <a href="https://www.tohoho-web.com/vim/about.html">とほほのVim入門(概要)</a>
    <br/>
    vimdoc-ja プロジェクト , 2024 , <a href="https://vim-jp.org/vimdoc-ja/">Vim日本語ドキュメント</a>
    <br/>
    Howpon , 2020 , <a href="https://howpon.com/21851">Vim – モードの種類と切り替える方法【モード表示の変更も】</a>

  </main>
    </>
  );
}