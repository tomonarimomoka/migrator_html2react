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

        # 最終更新日※HTMLファイル側に差異がおおいので置換を工夫
        reactFileText = reactFileText.replace("🕓本記事の最終更新日は","<LastUpdate/>")
        reactFileText = reactFileText.replace('<time id="modify"></time>\n\t',"")
        reactFileText = reactFileText.replace("です。\n\t","")
        reactFileText = reactFileText.replace("<script>\n\t","")
        reactFileText = reactFileText.replace("/* 更新日の取得 */\n\t","")
        reactFileText = reactFileText.replace("const last = new Date(document.lastModified);\n\t","")
        reactFileText = reactFileText.replace("const year = last.getFullYear();\n\t","")
        reactFileText = reactFileText.replace("const month = last.getMonth() + 1;\n\t","")
        reactFileText = reactFileText.replace("const date = last.getDate();\n\t","")
        reactFileText = reactFileText.replace("/* 日付を書き換える */\n\t","")
        reactFileText = reactFileText.replace("const target = document.getElementById('modify');\n\t","")
        reactFileText = reactFileText.replace("target.textContent = year + '-' + month + '-' + date;\n\t","")
        reactFileText = reactFileText.replace("</script>\n\t","")

        # サブタイトル
        reactFileText = reactFileText.replace('<h2 class="sectionTitleLine">','<SubTitle subTitle="')
        reactFileText = reactFileText.replace('</h2>','" />')

        # Readボタン（記事中）
        reactFileText = reactFileText.replace('.html" class="btnArticleLink">読む↗</a>','" msg="読む"/>')
        reactFileText = reactFileText.replace('<a href="./','<ReadBtn url="')

        # Readボタン
        reactFileText = reactFileText.replace('<a href="/src/','<ReadBtn url="')
        reactFileText = reactFileText.replace('.html" class="btnArticleLinkInText">', '" msg="')
        reactFileText = reactFileText.replace('↗</a>','"/>')

        # <br>
        reactFileText = reactFileText.replace('<br>','<br/>')
        # <P>
        reactFileText = reactFileText.replace('<P>','<p>')
        # </P>
        reactFileText = reactFileText.replace('</P>','</p>')
        # <ul style="margin: 0.2em;">
        reactFileText = reactFileText.replace('<ul style="margin: 0.2em;">',"<ul style={{margin: '0.2em'}}>")
        # 
        reactFileText = reactFileText.replace('<!--','{/* <!--')
        reactFileText = reactFileText.replace('-->','--> */}')

        # class
        reactFileText = reactFileText.replace(' class="',' className="')
        # 削除するもの
        reactFileText = reactFileText.replace('<body>','')
        reactFileText = reactFileText.replace('''
  </body>
</html>''','')
        reactFileText = reactFileText.replace('</html>','')
        

        # 初めに追記
        reactFileText = '''import { FC } from "react";
import {HeaderNav , SubTitle , ReadBtn ,References , LastUpdate} from '../Parts';
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