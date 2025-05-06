import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const Hakkason_1: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />  
  <main className="box">    
    <h1 id="articleTitle">【生成AI】ハッカソン参加レポート vol.1</h1>
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
    
    <SubTitle subTitle="筆者のスペック" />
    <ul>      
      <li>プログラミングはほぼ独学</li>
      <li>学生時代はプログラマー</li>
      <li>今はソフトフェアエンジニアとして自社製品の製品開発を担当</li>
      <li>使える言語はC# , Java , Python , Shell Script , TypeScript（勉強中）</li>
      <li>ハッカソンは初めて</li>
    </ul>

    <SubTitle subTitle="参加したイベント" />
    <p>
      <table >
        <tbody>
          <tr><th>イベント名</th><td>シンプルな生成 AI ハッカソン</td></tr>
          <tr><th>URL</th><td><a href="https://simpleform.connpass.com/event/317971/">シンプルな生成 AI ハッカソン</a></td></tr></tr>
          <tr><th>主催</th><td><a href="https://www.simpleform.co.jp/">SimpleForm</a></td></tr></tr>
          <tr><th>参加対象者</th><td>「プログラマもしくはデザイナであればどなたでも参加いただけます！」</td></tr>
        </tbody>
      </table>
    </p>

    <SubTitle subTitle="技術選定" />
    <p>我々はPython × Flaskで作りました。ソース管理はGitHubです。</p>
    <p>■言語</p>
    <p>
      今回は6チーム全てがPythonを使っていました。
      Pythonは使える人が多いのと、初学者でも簡単にかけてかつ環境構築も簡単（Macならいらない）のでハッカソンではよく使われるみたいです。
    </p>
    <p>■ソース管理</p>
    <p>
      ソース管理はほとんどの場合がGitHubなので、使ったことない人は練習しておきましょう。<br/>
      <ReadBtn url="gitForBeginner.html">はじめてのGit</a>でGitの使い方を解説していますので、確認しておきましょう！
    </p>
    
    <SubTitle subTitle="私たちのチームが作ったもの" />
    <p>私たちが作ったのはLPを自動生成するwebアプリケーションです。以下のようなフローで作成しました</p>
    <ol>      
      <li>入力ページでペルソナを入力させる</li>
      <li>「作成する」ボタン押下</li>
      <li>GPTにキャッチコピーを考えさせる</li>
      <ol>
        <li>入力させたペルソナ情報を基にプロンプトを作る</li>
        <li>APIを投げる</li>
        <li>帰ってきた文字列を保持する</li>
      </ol>

      <li>GPTにセールスポイントを３つ考えさせる。</li>
      <ol>
        <li>入力させたペルソナ情報と、生成させたキャッチコピーを基にプロンプトを作る</li>
        <li>APIを投げる</li>
        <li>帰ってきた文字列を保持する</li>
      </ol>
      <li>良い感じの背景画像を作らせる（←利用料が高いので途中で断念。。。）</li>
      <li>GPTにLPのHTML + cssを作らせる</li>     
      <ol>
        <li>入力させたペルソナ情報、生成させたキャッチコピー、生成させた３つのセールスポイントを基にプロンプトを作る</li>
        <li>APIを投げる</li>
        <li>帰ってきた文字列を保持する</li>
      </ol>
      <li>生成させたHTML・CSSをファイルにする</li>
      <li>生成したLP画面に遷移</li>
    </ol>

    <SubTitle subTitle="動的にプロンプトを作る" />
    <P>私は以下のようにして動的にプロンプトを作りました。</p>

      <pre><code className="codeBlock">
def addCondition(prompt,conditonType,condition):
  if(len(condition) != 0):
      prompt += "\n" + "・"
      if (len(conditonType) != 0):
          prompt += str(conditonType) + "は" + str(condition)
      else:
          prompt += condition    
  return prompt

def makePromptForCatchcopy(businessType,target,personasGender,age,imageColor,detail):
  prompt = "以下の特徴をもつビジネスのキャッチコピーを考えてください。"
  addCondition(prompt,"業界",businessType)
  prompt = addCondition(prompt,"ターゲット",target)
  prompt = addCondition(prompt,"ペルソナの性別",personasGender)
  prompt = addCondition(prompt,"ペルソナの年齢",age)
  prompt = addCondition(prompt,"LPのイメージカラー",imageColor)
  prompt = addCondition(prompt,"",detail)
  
  return prompt

def makepromptForLP(referenceUrl,businessType,target,personasGender,age,imageColor,detail,catchcopy,sales_points):    
  prompt = "以下の特徴をもつランディングページのHTMLを作成してください。\n"
  addCondition(prompt,"業界",businessType)
  prompt = addCondition(prompt,"ターゲット",target)
  prompt = addCondition(prompt,"ペルソナの性別",personasGender)
  prompt = addCondition(prompt,"ペルソナの年齢",age)
  prompt = addCondition(prompt,"LPのイメージカラー",imageColor)
  prompt = addCondition(prompt,"キャッチコピー",catchcopy)
  prompt = addCondition(prompt,"サービス概要",detail)

  for index, point in enumerate(sales_points):
      prompt = addCondition(prompt, "セールスポイント" + str(index), point)

  prompt += "・キャッチコピーはh1タグを使うこと\n"
  prompt += "・セールスポイントの内容はページ内で必ず3つ記載し横並びのデザインにすること\n" 
  prompt += "・背景色と文字の色が似すぎていると文字が見えなくなるので、文字が識別できる範囲でイメージに沿った色にすること\n"
  prompt += "・背景色はグラデーションにすること\n"
  prompt += "・レスポンシブデザインにすること\n"
  prompt += "・回答はHTML部分を返答すること\n"
  prompt += "・下記ページを参照すること\n"
  prompt += referenceUrl
  
  return prompt
    </code></pre>
    <p> 工夫した点としては、入力値がからでもプロンプトが崩れずに正しく作れるようにしたことです。
      それから、ほかのメンバーにもmakePromptForCatchcopy関数を基に関数を作ってもらうようにしたので、読みやすさには気を付けました。
    </p>
    <p>makepromptForLP関数は、ハッカソン当日はかなりChatGPTの作るデザインにバラつきが出たので、後日、改修してみました。</p>
    <p>ちなみに、関数名を誉められました✨プロンプトの綴りを間違えて指摘されたりもしました(笑) ← えいごにがて</p>
    
    <SubTitle subTitle="成果物" />
    <h3>ペルソナ入力ページ</h3>
    <p>このページでペルソナの情報を入力させます。</p>
    <img src="../素材/ペルソナ入力ページ.png" className="imgSize_30" alt="ペルソナ入力ページ">
    <h3>生成されたLP</h3>
    <p>
      ジャーン！！！いかがでしょうか？
    </p>    
    <p>
      もちろん、手直しは必要だと思いますが、ボタン一つでこれが生成されるのです。 とても面白いですよね！！！！
      生成AIの可能性を感じます。プロンプトを作るところもシステムで持てば、エンドユーザーはプロンプトエンジニアリングの知識すら必要ありません。
    </p>
    <img src="../素材/生成されたLP.png" className="imgSize_100" alt="生成されたLP">

    <SubTitle subTitle="おわりに" />
    <p>
      ハッカソン、本当に楽しかったです！！
    </p>
    <p>
      設計書作成やお偉いさんとの話し合いやテストなど、本当は好きじゃないことは抜いて、楽しいアイディア出しと開発だけをできるのです！！楽しいに決まっていますね✨
    </p>
    <p>
      普段お仕事で使わない言語に触れるチャンスにもなりますし、自分の会社以外のエンジニアと交流するのも楽しい＆勉強になります😌
      開発さえできればだれでも参加できる場合がほとんどなので、是非お勧めします。
    </p>  
    <p>
      ハッカソンの参加レポートは他にもあるので、ぜひご覧ください。
      <ReadBtn url="hakkason_2" msg="vol.2"/>
      <ReadBtn url="hakkason_3" msg="vol.3"/>
    </p> 
    <p>
      最後まで読んでくださり、ありがとうございました。
    </p>
  </main>
  <script>hljs.highlightAll();</script>
    </>
  );
}