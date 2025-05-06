import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const AwsForBeginner: FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>

<HeaderNav />
  <main className="box">
    <h1 id="articleTitle">初学者のためのAWS基本用語</h1>
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
    <SubTitle subTitle="本記事について" />
    <p>
      本記事ではAWS初心者に向けた用語の解説を行います。
      AWSに関する知識があまりない方がサクッと調べられるように箇条書きで説明します。<br/>
      参考リンクも記載していますので、もっと詳しく入れたい方は参照してください。
    </p>

    <SubTitle subTitle="AWSとは" />
    <ul>
      <li>Amazon Web Serviceの略</li>
      <li>Amazonが提供する200以上のクラウドサービスの総称</li>
    </ul>
    <h4>参考</h4>
    NTT東日本 , 2024 , <a href="https://business.ntt-east.co.jp/content/cloudsolution/column-259.html">AWSとは？初心者にもわかりやすく特徴・概要を纏めました</a>
    <br/>
    TECH MANIA , 2023 ,<a href="https://techmania.jp/blog/aws0001/">AWSとは【入門】基礎からわかりやすく解説</a>
    <br/>
    佐々木　真 , 2022 , <a href="https://wa3.i-3-i.info/word12933.html">AWS（読：エーダブリューエス）とは</a>

    <SubTitle subTitle="EC2関連の用語" />
    <h3>EC2</h3>
    <ul>
      <li>Amazon Elastic Compute Cloud の略</li>
      <li>Amazonの仮想サーバー（クラウド上にサーバーを構築できる）サービス</li>
      <li>サーバーの性能も台数も柔軟に決められる</li>
      ※Elasticは日本語で "柔軟性のある" という意味
    </ul>

    <h3>リージョン</h3>
    <ul>      
      <li>AWSのサーバーが置いてある国や地域のこと</li>
      <li>物理的な場所</li>
    </ul>

    <h3>インスタンス</h3>
    <ul>
      <li>EC2上の仮想サーバーのこと</li>
      <li>１インスタンス＝仮想サーバー1台</li>
      <li>インスタンスは時間によって変動可能</li>
    </ul>
    <h3>AMI</h3>
    <ul>      
      <li>Amazon Machine Imageの略</li>
      <li>OSやミドルウェアのテンプレート</li>
      <li>AMIの設定をもとにインスタンスを起動する</li>
    </ul>
    
    <h3>セキュリティグループ</h3>
    <ul>      
      <li>EC2インスタンスの仮想ファイアウォール</li>
      <li>インスタンスそのものを保護する</li>
      <li>セキュリティーグループルールの設定で、トラフィックを制限出来る</li>
      ※トラフィックとはネットワーク上の通信や通信量のこと
    </ul>

    <h3>ElasticIP</h3>
    <ul>
      <li>EIPと略される</li>
      <li>AWSで使うパブリックIPアドレス</li>
      <li>AWSから割り当てられるIPアドレスはサーバーを起動するたびに変更されるが、ElasticIPは固定できる</li>
    </ul>
    
    <h4>参考</h4>
    技術評論社, AWSの知識地図, 2022
    <br/>
    トレノケート株式会社, AWS認定クラウドプラクティショナー, 2022
    <br/>
    2021 , <a href="https://zenn.dev/tomoshimizu/articles/eedb6856df9c90">【AWS】EC2とは？概要から使い方までざっくり解説（実践あり）</a>
    <br/>
    weblio<a href="https://ejje.weblio.jp/content/elastic">elasticとは 意味・読み方・使い方</a>
    <br/>
    佐々木　真 , 2021 , <a href="https://wa3.i-3-i.info/word1972.html">トラフィック（英：traffic）とは</a>
    <br/>
    Amazon , <a href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/concepts.html">Amazon EC2 とは</a>
    <br/>
    Amazon , <a href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP アドレス</a>
    <br/>
    2019 , <a href="https://cloud.oreda.net/aws/ec2/note/eip.html">Elastic IP Address(EIP) を徹底理解</a>


    <SubTitle subTitle="ROute53関連の用語" />
    <h3>ROute53</h3>
    <ul>
      <li>AmazonのDNSサービス</li>
      <li>「ルートフィフティースリー」と読む </li>
      <li>多様なルーティングができる</li>
    </ul>
    <table>
      <caption>▼Route 53でできるルーティング（一部抜粋）</caption>
      <tr><th>名称</th><th>意味</th></tr>
      <tr><th>シンプルルーティング</th>
        <td>
          <p>1つのドメインに対して1つのIPアドレス</p>
        </td>
      </tr>
      <tr><th>レイテンシールーティング</th>
        <td>
          <ul>      
            <li>1つのドメインに対して複数のIPアドレス</li>
            <li>地域によってIPアドレスを使い分ける</li>
            <li>遅延度を下げられる </li>
          </ul>
        </td>
      </tr>
      <tr><th>加重ルーティング</th>
        <td>
          <ul>      
            <li>1つのドメインに対して複数のIPアドレス</li>
            <li>事前に決めた割合に応じてIPアドレスを選ぶ</li>
          </ul>
        </td>
      </tr>
      <tr><th>複数値回答ルーティング</th>
        <td>
          <ul>      
            <li>1つのドメインに対して複数のIPアドレス</li>
            <li>ランダムにIPアドレスを選ぶ</li>
          </ul>
        </td>
      </tr>
    </table>
    
    <h3>DNS</h3>
    <ul>      
      <li>Domain Name System の略</li>
      <li>IPアドレスとドメイン名を紐づけるシステム</li>
      ※これは一般的なIT用語
    </ul>
    <h4>参考</h4>
    技術評論社, AWSの知識地図, 2022
    <br/>
    トレノケート株式会社, AWS認定クラウドプラクティショナー, 2022
    <br/>
    2024 , <a href="https://en-junior.com/route53/">【図解AWS】Route53とは？初心者にもわかりやすく解説！</a>
    <br/>
    2021 , <a href="https://zenn.dev/seyama/articles/02118b0914183e">Amazon Route 53のルーティングがすごすぎる件</a>
    <br/>
    Amazon , <a href="https://docs.aws.amazon.com/ja_jp/Route53/latest/DeveloperGuide/routing-policy.html">ルーティングポリシーの選択</a>
    <br/>
    
  <SubTitle subTitle="おわりに" />
    <p>
      読んでくださりありがとうございました。
    </p>
    <p>
      AWSの用語が多くて難しいと感じた方もいらっしゃるかもしれません。
      本記事ではAWSに限らずエンジニアなら知っている言葉もたくさん出てきています。(DNS、ファイアーウォール、IPアドレスなど)
      本記事が難しく感じた方は、はじめにIT業界の用語を覚えることから始めると良いかもしれません。
    </p>
    <p>
      AWS関連の記事は他にもあるので、ぜひご覧ください。
      <ReadBtn url="awsListOfServices" msg="AWSサービス一覧"/>
    </p>
  </main>
    </>
  );
}