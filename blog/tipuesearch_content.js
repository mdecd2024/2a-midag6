var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程 w5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w5 協同產品設計實習的第五週, 教學內容為先前影片整理、分組網誌的統整與 NX 零組件繪圖. ODOO PLM 論文中英並列任務 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別為 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回 github cd2024 2a 1 blog setup cd2024 2b 1 建立個人課程倉儲與網站 cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github cd2024 2b 3 如何設定 Github 帳號的雙重認證 cd2024_2b_7_w2 利用 codespaces 維護分組網站 cd2024_2b_6_w2 從第一組空倉儲建立 cmsimde_site 內容 cd2024_2b_5_w2 第一組組長建立 Team 並設定分組倉儲 cd2024_2a_w2_1(41023239楊祐銘) cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲(41023239楊祐銘) wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組 如何統整組員子模組中的協同設計網誌 當各組員每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. 實際的設定操作 pelicanconf_py.txt, 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表示要利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行. 過程中, 各組員必須將個別的網誌 .md 檔案名稱加上前綴字串, 例如: \"學號_\" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用該組員的學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容. 利用 NX1872 協同繪製零組件 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. 下載NX2027_lite (需要密碼, 解開後約 8G)","tags":"w5","url":"./2a-midag6_2024-Spring-w5-blog-tutorial.html"},{"title":"2024 Spring 課程w6","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 更新分組倉儲中的分組倉儲 更改個人與群組 .md 與 slug名稱 , 加上自己的學號或者加上群組分組名稱 cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 教學影片如下: https://youtu.be/BtYUHe8Actk?si=zpEdRXOtQluT22Fk cd2024 2a w6 利用 pelicanconf py 整合各組員的網誌 教學影片如下: https://www.youtube.com/watch?v=XkImjlZSGGk 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點","tags":"w6","url":"./2a-midag6_2024-Spring-w6-blog-tutorial.html"},{"title":"2024 Spring 課程w7","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w7 更改個人與群組 .md 與 slug名稱 , 加上自己的學號或者加上群組分組名稱 協同產品設計實習的第七週, 正值春假期間, 用來回顧課程內容重點. 從協同設計的架構上, 個人與分組的倉儲中, 總共設計了以下幾種內容的協同模式: 分組網站內容的協同 - 其中包括章節式的網站內容與網誌內容, 可以透過 Python 程式方法整合各學員子模組中的 config/content.htm 以及 markdown/*.md 檔案至分組網站中 分組報告內容的協同 - 採用的是 Github Actions 與近端 MikTeX 中的 xelatex 將 .tex 轉為 pdf 的整合過程 分組產品設計的 PLM 協同 - 採用的是 Odoo PLM 模組, 讓各分組可以將網站內容、報告內容視為產品, 從協同架構的訂定作為起點, 完成資料展示作為終點, 逐一將過程的協調、派任與執行方法納入 PLM 系統管理 分組零組件設計的協同 - 分別採用 Solvespace 作為鋼球平衡台範例, 讓學員使用 Siemens NX 1872 進行協同零組件繪圖設計, 並將各零件的 .prt 檔案納入各學員的倉儲進行組立, 以便找出最佳的設計分工以及零組件轉檔流程 分組模擬場景設計的協同 - 當各分組順利完成鋼球平衡台的零組件轉檔後, 一旦進入 CoppeliaSim 場景後, 必須逐一配置感測器 (Sensors)、致動器 (Actuators) 以及 ZMQ RemoteAPI Python程式, 主要探討如何將此一場景模擬過程在 CoppeliaSim XML 檔案格式與 Siemens NXOpen Python 零件程式檔案間, 找到合用或最佳的協同產品設計模式. 分組專案簡報設計的協同 - 在上述各產品設計階段所累積的各種資料, 該如何有效整合到專案完成後必須進行的網際簡報中. 分組網站內容的協同 各分組網站內容的協同包含: 章節式網站內容 週記式網誌內容 網際簡報內容 其中首先要求各組員必須每週在 cd2024 倉儲中的 markdown 目錄編寫 markdown 網誌文章, 再經由 Pelican 轉檔至 blog 目錄中的超文件網誌. 由於 Pelican 採用 Python 檔案進行設定, 因此可以在轉檔的過程中, 將各子目錄中的組員倉儲網誌集合到分組倉儲中的 combined_markdown 目錄之後, 再指定將網誌超文件轉至各分組倉儲的 blog 目錄. 由於分組網誌內容協同時, 所有組員所編寫的 markdown 文章必須存入 combined_markdown 目錄, 因此 markdown 網誌文章檔案的命名不可重複, 且各網誌文章的 Slug 字串將會被當作用來命名轉檔後的超文件檔案名稱, 因此也不能重複. 至於當各組員採用 Replit 維護個人倉儲內容時, 可以直接從 Replit Connect 至 Github 取得維護倉儲的權限, 旦卻無法直接用管理分組倉儲, 因為各組員雖然擁有管理分組倉儲的權限, 但是無法在 Replit 中以免費的組員帳號管理 Github Classroom 所取得的分組倉儲. 而必須動態納入針對分組倉儲的 OpenSSH 管理權限. 分組報告內容的協同 add_to_content_html.py generate_pages.py","tags":"w7","url":"./2a-midag6_2024-Spring-w7-blog-tutorial.html"},{"title":"2024 Spring 課程w8","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w8 內容管理系統 cd2024 2a w8 產品協同架構說明 https://www.youtube.com/watch?v=CqhZm_9ugdc 協同產品設計實習課程使用網際內容管理系統, 採 Github Classroom 建立分組倉儲, 並由學員自行利用 cmsimde_site 作為 Github 倉儲的引擎目錄, 利用 Python 執行網頁編輯. 之後再轉檔為靜態網頁, 以便利用 Github Pages 所提供的 WWW 伺服器呈現協同產品設計過程的相關多媒體內容. 除了章節式的網站外, cmsimde_site 還額外利用 Pelican 管理使用者所建立的網誌, 以及利用 Reveal 管理使用者所建立的網際簡報. 在使用者每週的內容管理過程, 由於必須採用 Python 執行網頁編輯, cd2024 課程採用了四種不同的方法進行, 其中包括 Replit、Codespaces、Gitpod 以及 localhost. 由於前三者屬於雲端作業, 各有不同的使用規定與免費使用權限, 對於多人協同的產品設計團隊而言, 可以根據各自的喜好與環境選擇合用的網頁編輯工具, 且在多方了解下也可透過實際使用發展中的雲端 IDE 環境, 一窺未來可能的 AI 導引前景.","tags":"w8","url":"./2a-midag6_2024-Spring-w8-blog-tutorial.html"},{"title":"2024 Spring 課程w1-1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w1 依照mde.tw/cd2024中的 Topics / Video中的影片 建立個人課程 cd2024 倉儲與網站的操作影片 (7:17) 設定 Replit 與 Github 應用授權的說明影片 (2:44) 說明如何設定 Github 雙重認證 (6:28) 說明如何利用 Replit 對 cd2024 改版 (20:16) 照著影片中的步驟創建個人的cd2024倉儲與網站與如何與Replit連結Github，並更新上推至倉儲去做更新 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌","tags":"w1-1","url":"./2a-midag6_2024-Spring-w1-1blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2a-midag6_2024-Spring-w1-blog-tutorial.html"},{"title":"2024 Spring 課程w2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w2 協同產品設計實習的第二週, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1, 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1. 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析)","tags":"w2","url":"./2a-midag6_2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程w3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w3 W3 任務交付 cd2024 w3 任務 請各組將組員的個人課程倉儲 cd2024 設為分組倉儲 2a-midag1 的子模組, 且以各組員的學號作為子模組的名稱 如何在倉儲中設定子模組, 為何要將資料設為子模組? 能不能在 Replit 維護分組網站? 其他方法還可以直接使用 Codespaces, Gitpod 與 localhost 維護倉儲與網站 假如仍希望使用 Replit 維護分組網站, 該如何進行? 請各組員將負責分工處理的 https://webthesis.biblio.polito.it/16429/1/tesi.pdf 中英文並列資料 (LaTeX) 放在個人的倉儲網站, 最後在分組倉儲中整合建立出各組的期中報告 pdf 檔案 該文章有 87 頁, 若有八名組員, 則每人可分工負責 11 頁, 若兩組以上結合協同, 則可按照規劃, 從文章標題開始到最後一頁, 先分配各組員任務後展開中英文並列編輯, 可以使用翻譯軟體或 ChatGPT 協助進行內容解釋或翻譯, 各組通篇完成中英並列資料整合後, 各學員必須於個人的課程倉儲 cd2024 中整理出協同過程的心得. 當文章翻譯或了解其內容後, 接下來該如何套用到期中報告題目: ODOO PLM 在協同產品設計上的應用 - 以鋼球平衡台機電控制系統設計為例 假如採用 Onshape 進行零組件設計繪圖 本周為第三周，進度是照著網誌中的影片將組員的個人倉儲設為分組倉儲子模組與有關 LaTeX 轉 pdf 在 Windows 環境, 說明如何利用 LaTeX 協同建立分組報告。 2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 列出期中分組倉儲與網站 cd2024 期中分組倉儲與網站 期中協同分組報告 請參考 https://github.com/mdecd2024/test-ag1 中的 latex 目錄與 downloads 目錄中的 https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt 並根據下列教學範例: 說明如何將 41123130 的個人倉儲設為 2a-midag2 分組倉儲的子模組 說明如何將組員的個人倉儲納入分組倉儲成為子模組 說明如何在 Replit 維護分組倉儲 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成下列文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2b-midbgx_report.pdf 的製作. 若要在近端使用可攜程式環境編譯分組 LaTeX 報告, 請下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 以及參考資料: latex_images_github.7z (需要密碼) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 有關 Codespaces 使用 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 使用 Gitpod 維護倉儲與網站 Gitpod 與 Codespaces 類似, 也是採用 Visual Studio Code 網際介面, 可讓使用者維護位於 Github 的倉儲, 只是個人的 cd2024 倉儲, 以 Github 帳號登入 Gitpod 之後, 可以直接維護, 但是分組網站是從 Github Classroom mdecd2024 帳號下派任, 與 Replit 環境維護分組網站的方法相同, 必須自行建立 .ssh 下的 id_rsa 與 config, 差別是一旦在 Gitpod 導入的分組網站 SSH 管理權限, 不會像 Replit 免費帳號下, 系統會定期刪除免費帳號使用者的 .ssh 目錄. 在 Gitpod 導入 Github 倉儲後, 路徑位於 /workspace/ 目錄下, 但是 .ssh 目錄則位於 /home/gitpod/.ssh, 當使用者執行 cd 則會進入 /home/gitpod 目錄, 且使用者在 Gitpod 的 Dashboard 可以從 https://gitpod.io 進入. 說明使用 Gitpod 維護個人網站 說明使用 Gitpod 維護分組網站 電腦教室中的協同設計 cd2024 起, 電腦輔助設計室中的每一台電腦已經各自擁有一個外部 IPv4 網址, 因此各組員可將個人倉儲與分組倉儲 git clone 至隨身碟, 利用 Token 或 SSH session 授權維護倉儲與網站內容. 如何利用 Classic Token 授權維護倉儲與網站 ODOO 參考資料 https://www.google.com/search?q=sap+vs+odoo (與 SAP 及 ODOO 有關的搜尋) 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf or local download (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) 英文單字查詢: 2021_odoo_reading.html 將組員的個人倉儲設為分組倉儲子模組 cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站, 設定的指令為: git submodule add 組員的個人倉儲網址 組員的學號 例如: 假設組員的 cd2024 個人倉儲位於: https://github.com/scrum-1/cd2024, 且該組員的學號為 41123299, 則該組員必須在進入該組的倉儲目錄後, 執行: git submodule add https://github.com/scrum-1/cd2024.git 41123299 如此, Github 帳號為 scrum-1 的組員, 其個人倉儲就會設定為分組倉儲的子模組, 而且是以其學號命名此一子模組的目錄名稱. 這樣設定的好處是: 各組員可以自行管理個人的課程倉儲與網站, 也就是位於其 Github 帳號下的 cd2024, 並且自行決定要整合到分組倉儲與網站的版本. 也能將自己在課程網站的資料, 直接用連結導入分組網站, 無需額外將資料搬進分組倉儲. 另外一個使用 Github Classroom 派送分組倉儲的好處, 是 mdecycu 自動成為各分組倉儲的管理者之一, 若各組在改版或解決衝突的過程發生問題, mdecycu 可以協助處理. 一旦分組倉儲帶有以各組員學號作為子模組之後, git clone 倉儲必須使用: git clone --recurse-submodules 加上各組的倉儲 URL 以第一組期中分組倉儲的 git clone 為例, 並且使用 putty session 名稱 github.com: git clone --recurse-submodules git@github.com:mdecd2024/2b-midbg1.git 而且若要在分組倉儲中更新各組員的子模組版本, 則必須更換目錄到該組員的學號目錄中並且使用 git pull origin main, 才能取下該組員其 cd2024 個人倉儲的最新內容. 取下組員資料後, 若要新增提交推送, 則必須再更換目錄回分組倉儲後才能執行. 有關 LaTeX 轉 pdf 在 Windows 環境, 說明如何利用 LaTeX 協同建立分組報告 使用 Github Actions 執行轉檔: https://github.com/mdecd2024/test-ag1/blob/main/.github/workflows/main.yml 倉儲中的 latex 目錄: https://github.com/mdecd2024/test-ag1/tree/main/latex 利用可攜程式編譯 LaTeX 下載 miktex-portable.7z (需要密碼, 下載 167MB, 解開壓縮檔案後約 1GB) 下載 latex_images_github.7z (需要密碼) 協同產品設計實習分組期中報告 LaTeX 範本: 下載 cd2024_midterm_report_latex_ex.7z 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌 設定網誌Odoo PLM 功能 簡介 Odoo PLM 用法 設定個人網誌系統 利用 https://github.com/mdecycu/cmsimde_site 建立的網站, 其動態網站資料位於 config/content.htm, 轉換完成的靜態網站資料位於 content 目錄中. 網誌的原始檔案位於 markdown 目錄, 所使用的網誌系統為 Pelican, 轉換完成的網誌內容則位於 blog 目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關的設定檔案還有: pelicanconf.py 與 publishconf.py 等. 為了順利完成上述個人課程網站的網誌設定, 必須根據各用戶所使用的 github 帳號對這三個 .py 檔案進行設定. OnShape 帳號 若網路順暢, 可以登入 https://onshape.com 利用 MKCad Library 或 VEX Part Library 零件程式庫建立產品系統模型. CoppeliaSim CoppeliaSim 4.5.1 rev1 for IPv6.7z (169MB, password required to download) 可以結合可攜程式環境: portable_2024.7z (需要密碼, 下載 540MB, 解開壓縮後約 1.8GB) 進行機電系統設計與模擬. 模型簡化 為了讓機電產品能在 CoppeliaSim 動態場景中順暢模擬, 各零組件必須有效進行簡化, 此一零件簡化過程如何後續對零組件進行應力或其他動態系統分析之前, 必須先簡化零組件外型後再進行網格化的應用相同.","tags":"w3","url":"./2a-midag6_2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程w4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 目前依照w1~w3影片進行打字幕、逐字稿、並且整理影片的重點內容 協同產品設計實習的第四週, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時若導入 Source Tree 協助各組員更清楚看到倉儲改版架構, 另外 Git Branch 的應用. 教學影片分組整理並自評 假如你好奇這個概念哪裡來的: 請參考反思一 and 反思二. 對於事不關己或者不明白為何團隊中的成員 (這裡指教與學的相關人、事與物), 總讓人提不起興趣, 但若能在過程中找到主要在乎的角色、任務或者緣由, 或許就能從應付著手, 一直到終於了解天下沒有白吃的午餐, 所有的努力付出, 終究不會白費. 此外, 假如想參考先前學長推甄研究所的相關資訊, 請利用 Team code: n9k585c 進入自行查看. w4 2a 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. 各組員與分組倉儲的資料, 包括文字資料 (含 LaTeX 報告章節資料)、零組件檔案、零件工程圖或組立圖檔 (含 BOM 與爆炸圖), 以及目前正在整理的教學影片, 或者是各學員將操作流程錄製成的影片或 Wink 資料. 第一種介紹的倉儲維護方式 - Replit 有關 Replit 的開發歷史, 可以參考這裡與 ChatGPT 的對話內容. Replit 目前所提供的免費帳號, 雖然沒有太多的運算資源, 但並沒有使用時間的限制, 因此若能利用 python3 main.py 執行動態網站, 而且利用 python3 main2.py 執行靜態網站, 只要區分開動態網站與靜態網站的使用, 就可以順利在 Replit 上維護個人與分組的網站內容. 下載 main2.txt 與 static.txt, 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明如何在 Replit 檢視靜態網站教學影片 說明如何下載 replit_main2.7z 並在倉儲中建立兩個檔案教學影片 使用 Replit 維護個人網站時, 可以在登入 Github 後, 連線到 Replit 取得雙方認證, import 個人 cd2024 倉儲後, 經過改版就可以將資料推向 Github. 但目前免費 Replit 帳號僅允許開啟一個 Web server 埠號之外, 並無法將一個 Replit 延伸授權至兩個 Github 帳號, 因此若在個人的 Replit 帳號中 import 分組網站, 必須自行設定與 Github 帳號的推送授權, 也就是利用帳號下的 token 或 OpenSSH keys 設定. 首先考量在 Replit 導入的倉儲使用 token 是否可行, 答案是: 不可, 原因是: 任何人只要透過 https://replit.com/@wcms/cd2024?v=1#.git/config 就可以看到免費帳號下的任一個倉儲的 .git/config, 若其中帶有個人帳號授權的 token, 任何人都能用來對此倉儲進行改版. 因此剩下的方案就是採用 OpenSSH 的 keys 設定, 在各自的 /home/runner/.ssh 中配置 config 與 id_rsa, 並將 id_rsa 對應的公鑰登錄到 Github 帳號下. 其中由於 Replit 與 Github 都支援 IPv4 網路協定, 因此 config 設定為: 1 2 3 Host github.com User git Hostname github.com 上述 config 設定檔案表示, Host 名稱即為 Windows 環境使用 Putty 設定時的 session 名稱, 因此 <https://replit.com/@wcms/cd2024?v=1#.git/config 若採用 OpenSSH 協定對 Github 連線, 則必須將原本的: 1 2 3 [remote \"origin\"] url = https://github.com/mdecycu/cd2024 fetch = +refs/heads/ :refs/remotes/origin/ 改為: 1 2 3 [remote \"origin\"] url = git@github.com:mdecycu/cd2024 fetch = +refs/heads/ :refs/remotes/origin/ 上列的 \"url = git@github.com:mdecycu/cd2024\" 表示將透過 SSH (Secure SHell) 協定, 使用 git 作為遠端登入的帳號, 並且根據 config 中的 Host 設定做為代表字串, 連線到 Hostname, 也就是 github.com, 登入後, 利用 id_rsa 與 \":\" 後的 mdecycu 帳號下的 OpenSSH 登錄的 public keys 進行比對, 若吻合, 則可以授權對旗下的 cd2024 倉儲進行改版. 只不過 Replit 免費帳號下的 /home/runner/.ssh 會在每次雲端系統整理的時候被系統刪除 (原因不明, 有可能是用來區分付費帳號與免費帳號的使用權限), 但是在系統刪除此一授權的區間, Replit 免費帳號使用者可以透過將設定在 /home/runner/.ssh 目錄下的 config 與 id_rsa 下載到 USB 隨身碟, 一旦發現分組倉儲下的授權被系統移除後, 再利用動態網站將 config.txt 與 id_rsa.txt (因為內建的網站允許 .txt 檔案上傳) 傳到 downloads 目錄下, 然後再利用 python3 ssh.py 將此兩個授權資料放到正確的 /home/runner/.ssh 目錄下, 並設定正確的 id_rsa 檔案存取權限 (必須移除 other 與 group 的 rwx 權限) 上述用來搬遷 (move) config.txt 與 id_rsa.txt, 並設定 id_rsa 檔案屬性的 ssh.py 程式如下: 1 2 3 4 5 6 import os if not os.path.exists(\"/home/runner/.ssh\"): os.makedirs(\"/home/runner/.ssh\") os.system(\"mv ./downloads/id_rsa.txt /home/runner/.ssh/id_rsa\") os.system(\"mv ./downloads/config.txt /home/runner/.ssh/config\") os.system(\"chmod og-rwx /home/runner/.ssh/id_rsa\") 其中的 os 模組導入後, 可以利用 os.system() 執行系統指令, 且最前面的 if 迴圈可以檢查是否存在 .ssh 目錄, 若已經被系統刪除, 可以透過 os.makedirs 建立此一目錄. 第二種介紹的倉儲維護方式 - Codespaces 位於 https://github.com/codespaces, 是 Github 帳號下個倉儲的延伸功能, 每一個免費 Github 帳號每個月有 120 core-hours 的使用限制, 每一個免費 codespace 最小配置 2core, 可以提升至 4core. Codespaces 的網際介面為 Visual Studio Code, 支援多終端機、多埠號伺服, 且可從各倉儲的 Code 頁面中直接啟動, 並直接使用 Github 帳號的管理授權, 因此使用者登入 Github 帳號後, 可以直接利用 Codespaces 管理個人與分組倉儲, 無需額外再設定倉儲的管理授權. 在 Codespaces 執行動態網站的指令為 python3 main.py, 而執行靜態網站則必須從表單新增一個終端機, 然後利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Visual Studio Code 就會將內埠號轉為 443 並且利用編碼產生伺服器的網路符號名稱. 第三種介紹的倉儲維護方式 - Gitpod 位於 https://gitpod.io, 是一套類似 Codespaces 的雲端 IDE 服務系統, 可以直接採 Github 帳號登入, 免費使用授權時間為每月 50 小時, 若採 Github 帳號登入, 則可以直接導入該帳號下的個人倉儲進行維護. 但是若導入分組倉儲, 則必須自行設定推送授權, 由於 Gitpod 並無像 Replit 帳號下的固定連線網址, 因此前述取得對分組倉儲的授權, 可以採 token 與 SSH 等兩種方式, 但目前並未測試是否設定完成的 /home/gitpod/.ssh 目錄, 是否會遭系統刪除. Gitpod 與 Codespaces 相同, 支援多終端機 (Terminal) 與多埠號, 使用者可以同時執行個人與分組倉儲的動態與靜態網站. 在 Gitpod 執行動態網站的指令為 python3 main.py, 而執行靜態網站則必須從表單新增一個終端機, 然後利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Visual Studio Code 就會將內埠號轉為 443 並且利用編碼產生伺服器的網路符號名稱. 第四種介紹的倉儲維護方式 - localhost localhost 採用的是 portable_2024 可攜程式系統, 啟動後, 可以用來執行個人與分組的倉儲維護, 只是若在 Windows 系統可以選擇較簡單的 token 綁定授權, 或者使用 Putty 設定的 SSH 使用授權, 唯一必須注意的是, Putty 所建立的 session 資料會直接登錄到操作系統的登錄檔案 (Registry), 使用者必須將此 session 以 .reg 的格式匯出, 存在隨身碟, 並在每次要使用此一授權時, 以滑鼠在實體檔案路徑下的 my_putty_session.reg (不能使用虛擬的檔案路徑, 例如: 不能點擊位於 Y: 目錄下的 .reg 登錄設定檔案) localhost 中的可攜程式系統還帶有 CoppeliaSim、NX 可攜與啟動批次檔案、ShareX、Wink 以及 Solvespace 等檔案, 其中的 CoppeliaSim 用於控制系統設計與模擬, 而 NX 則用於各組員協同繪製目標產品的零組件, ShareX 與 Wink 則用來建立操作流程影片, Solvespace 則可用於平面機構模擬以及初步的零組件尺寸規劃用. 在 localhost 執行動態網站的指令為 python cmsimde/wsgi.py, 也可以透過 cms.bat 執行上列指令. 而執行靜態網站則可以在另一個命令列中, 利用 python3 -m http.server 執行靜態網站, 一旦網站啟動, Python 就以內建的 8000 作為伺服器埠號, 並在 http://localhost:8000 中伺服. 利用 NX1872 協同繪製零組件 註: 目前可下載最新的 NX 版本為 2312.4001, 惟系上授權版本僅配置到 2206, 必須更新授權後才可以支援 2212、2306 與 2312 版本 (每半年發布一個新版本). 從電腦輔助設計室中的電腦 C:\\Program Files\\Siemens\\NX1872 取得所需的 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. 電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12, 若在電腦教室則可利用下列批次檔案啟動 NX, 若在各自的電腦或隨身碟帶有各版次的 NX 資料, 只需要透過網路取得授權, 就可直接從 USB 中執行各版次的 NX. 下載NX2027_lite (需要密碼, 解開後約 8G) 使用不同版本 NX 執行繪圖, 該如何協同設計? start_USB_nx1872.bat 可以啟動 USB 隨身碟中的 NX1872. 1 2 3 4 5 6 7 8 9 10 @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=%Disk%:\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx1872.bat 可以利用 C: 安裝的 NX1872 啟動. 必須特別注意的是, 無論使用 USB 或電腦安裝的套件啟動, 相關設定檔案均會存在電腦的 AppData 目錄中. 就 NX1872 而言, 這些設定檔案會存在 C:\\Users\\Admin\\AppData\\Local\\Siemens\\NX1872 中, 使用者必須在啟動可攜時將先前的設定轉存至對應的目錄下. 1 2 3 4 5 6 7 8 9 10 @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=C:\\Program Files\\Siemens\\NX1872\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx2206.bat 可以利用 D: 安裝的 NX2206 啟動. 1 2 3 4 5 6 7 8 9 10 @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=D:\\Program Files\\Siemens\\2206\\ugii path = %ugii%;%path% start ugraf -nx start_cadlab_nx12.bat 可以利用 D: 安裝的 NX12 啟動. 1 2 3 4 5 6 7 8 9 10 @echo off set Disk=z subst %Disk%: \"NX1872\" %Disk%: set SPLM_LICENSE_SERVER=28000@NX_license_server_IP set UGII_LANG=english set UGS_LICENSE_BUNDLE=ACD11,ACD10 set ugii=\"D:\\Program Files\\Siemens\\NX 12.0\\ugii\" path = %ugii%;%path% start ugraf -nx","tags":"w4","url":"./2a-midag6_2024-Spring-w4-blog-tutorial.html"}]};