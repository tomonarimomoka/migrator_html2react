import glob
import shutil
import os
htmlFileList = glob.glob("./htmlFileFolder/*")

for htmlFile in htmlFileList:
    
    fileName = os.path.basename(htmlFile).split(".")[0]
    # 1文字目だけ大文字にする
    componentName = fileName[0].upper() + fileName[1:]
    renameFileName = componentName + '.tsx'

    with open(htmlFile,'r',encoding='utf-8') as f:
        fileText = f.read()
        # headが終わるまで削除
        reactFileText = fileText.split('</head>')[1]

        # headerを置き換え
        reactFileText = reactFileText.replace('''  <!-- ヘッダー高さ分の余白   -->
  <div class="header-box"></div>
  <header>
    <nav class="pc-menu">
      <ul class="header-ul">
        <li class="header-li"><a href="/index.html" class="header-a">HOME</a></li>
        <li class="header-li"><a href="/list-tech.html" class="header-a">ARTICLE</a></li>
        <li class="header-li"><a href="/privacyPolicy.html" class="header-a">PRIVACY</a></li>
      </ul>
    </nav>
  </header>''',"<HeaderNav />")

        # 最終更新日
        reactFileText = reactFileText.replace('''<div class="right">
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
        </div>''',"<LastUpdate/>")

        # サブタイトル
        reactFileText = reactFileText.replace('<h2 class="sectionTitleLine">','<SubTitle subTitle="')
        reactFileText = reactFileText.replace('</h2>','" />')
        
        # Readボタン
        reactFileText = reactFileText.replace('<a href="/src/','<ReadBtn url="')
        reactFileText = reactFileText.replace('.html" class="btnArticleLinkInText">', '" msg="')
        reactFileText = reactFileText.replace('↗</a>','"/>')

        # <br>
        reactFileText = reactFileText.replace('<br>','<br/>')

        # class
        reactFileText = reactFileText.replace(' class="',' className="')
        # 削除するもの
        reactFileText = reactFileText.replace('<body>','')
        reactFileText = reactFileText.replace('''
  </body>
</html>''','')

        # 初めに追記
        reactFileText = '''import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References} from '../Parts';
import './style.css'

export const ''' + componentName +''': FC = () => {
  var ref:string[][] = [[] ,[] ,[] ] 
  return(
    <>''' + reactFileText
        
        # お尻に追記
        reactFileText = reactFileText + '''
    </>
  );
}'''

    # 書き出し
    with open("./output/" + renameFileName, 'w', encoding='utf-8') as f:
        f.write(reactFileText)