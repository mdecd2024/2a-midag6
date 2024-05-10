var tipuesearch = {"pages":[{"title":"2024 Spring 課程w11","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w11 協同產品設計實習第十一週實習操作, 各學員利用 NX 1872 繪製鋼球平衡台所需的零組件. 進行在倉儲 https://github.com/mdecd2024/2astud-2asite 中編輯各分組 (例 本組為 g6) 中的專案，打個人上課與誰協同、上課地點、設備等等....心得。 觀看老師的兩個影片，第一個影片說明心得內容與第十週後要進行的事情，第二個影片為如何在 2astud-2asite 中避免衝突，使用個人分支，使用指令 git branch (查看分支)、git branch 41023124(名稱)(新增分支)、git checkout 41023124(切換分支)，git push origin 41023124 (在遠端建立41023124)、git merge 41023124(進行分支合併)等等指令， 41023124 : 本堂課為協同產品設計與實習，前三週為設定個人倉儲，了解 Github、 Replit與Codespace如何使用與其上傳協同原理和創建PuTTy，第四週與第五週將前三週的每一個教學錄影影片進行字幕的編輯與逐字稿，相較於前三週，第四週進度與任務速度有點快，因為剛開始並不是每個組員都有參加，所以少數組員需要完成所有影片字幕與逐字稿。 協同產品設計與實習這門課相較於較為傳統的上課方式有很大的不同，課堂並不是只有死板的知識與課本，需要利用網絡、AI去幫助自己與群組完成共同的編輯與協同，在這門課中使用 Github、Codespace、Replit、Odoo、NX、Coppeliasim去完成協同與繪製任務，也強調了組員之間的分工與合作，才能迅速的完成老師在每一周交代的任務。 目前到了w11，上課時段都是前往0810電腦教室使用USB下載的近端、Replit與Codespace相互協同編輯，有時候下課後在教室沒有做完，就回宿舍使用自己的筆電，相較於自己的筆電，學校的電腦每次重啟都需要加入鑰匙和自己習慣的設定，而且滑鼠不好用。 第一個教學影片: 第二個教學影片:","tags":"w11","url":"./41023124_2024-Spring-w11-blog-tutorial.html"},{"title":"如何解決群組倉儲衝突","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 解決群組倉儲衝突方法 請\"每位\"組員檢查自己的上傳、編輯方式中 ( Codespace 、近端、Replit )有沒有之前弄錯的子模組 ( cd2024 與 4102324 ) ，如果有的話請刪除，不然之後上船都會有問題，以下是刪除方法。 如果你的codespace有cd2024的子模組 就打 git submodule deinit cd2024 git rm --cached cd2024 rm -rf cd2024 刪除完在git push就好 反之有4102324 就把cd2024改為4102324 這張照片我刪完cd2024的submodule了，所以看不到cd2024的子模組，請組員自己檢查有沒有 ( Codespace)","tags":"如何解決群組倉儲衝突","url":"./41023124_2024-Spring-如何解決群組倉儲衝突-blog-tutorial.html"},{"title":"2024 Spring 課程w10","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w10 W10 實習任務一 將老師給的2a出席名單，將程式詢問AI後，將程式改寫並在每一行後方進行註記，方便了解與解析此Brython程式如何進行運作 內容與重點，程式是如何運行與操作的 程式gists url 程式內容與重點，程式是如何運行與操作的 這個程式是一個Python腳本，它使用了Brython庫（Python的瀏覽器端實現），用於在網頁上動態加載和處理CSV文件數據，並將處理後的數據以HTML的形式插入到網頁中。 讓我們來看一下它的主要功能和運行流程： 1. **導入模塊**：程式一開始導入了需要使用的模塊，包括`window`（瀏覽器窗口對象）、`ajax`（用於發送Ajax請求）、`document`（HTML文檔對象）、`html`（HTML元素生成器）。 2. **fetch_csv_data函數**：這個函數是整個程式的主要部分，它用於獲取CSV數據並將其轉換為HTML格式插入到網頁中。 - **CSV文件地址定義**：將CSV文件的URL地址存儲在變量`url`中。 - **請求完成回調函數**：定義了`on_complete`函數作為Ajax請求完成後的回調函數。如果請求成功（狀態碼為200或0），則執行以下操作： - 讀取CSV文件內容並按行拆分。 - 遍歷每一行數據，忽略空行，將非空行按逗號拆分，並將拆分後的數據存儲到列表中。 - 去除第一行（標題行），保留數據行。 - 針對每個學生的數據，生成其個人網站鏈接、GitHub倉庫鏈接，以及小組網站鏈接和GitHub倉庫鏈接。 - 將生成的鏈接和相關信息插入到HTML頁面中的指定位置。 - **發送Ajax請求**：使用Ajax對象發送GET請求到指定的URL，綁定了完成事件，設置請求頭部，並發送請求。 3. **調用fetch_csv_data函數**：在程式末尾調用了`fetch_csv_data`函數，觸發CSV數據的獲取和處理過程。 總的來說，這個腳本通過Ajax請求獲取CSV數據，然後解析該數據並生成HTML元素，最後將生成的HTML插入到網頁中，完成了將CSV數據動態展示在網頁上的功能。 鋼球平衡台 PID 控制與模擬 W10 實習任務二: 請下載 cd2024_ball_balancing_platform_control_ref.7z , 閱讀後請將摘要內容放入個人與分組網誌中. 閱讀結果: 各篇論文要點摘要： 結論： 實習步驟: 開啟可攜程式系統中的 CoppeliaSim 開啟鋼球平衡台模擬場景 啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 鋼球平衡台零組件繪圖 W10 實習任務三: 請根據 Solvespace_model _2d_for_cd2024_w6.7z 零組件尺寸, 利用 Siemens NX1872.7z (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中.","tags":"w10","url":"./41023124_2024-Spring-w10-blog-tutorial.html"},{"title":"2024 Spring 課程w9","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w9 w9 第九週 填個人期中自評，了解需要分工之進度與工作，進行個人與團隊倉儲之資料整理並解決群組倉儲衝突。 協同產品設計實習的專案實習, 透過 ChatGPT、Gemini 1.5 Pro 與 Claude 3 的協助下進行. 課程評分: 學員每週編寫網誌內容佔 40% 每週上課內容摘要與分組報告執行分工及進度整理 相關資料收集與閱讀心得 分組期中報告 ( LaTeX -> pdf) 與簡報影片 ( OBS -> mp4) 佔 20% 分組期末報告 ( LaTeX -> pdf) 與簡報影片 ( OBS -> mp4) 佔 40%","tags":"w9","url":"./41023124_2024-Spring-w9-blog-tutorial.html"},{"title":"2024 Spring 課程w8","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w8 本週為第八周，觀看下方影片了解自己的任務與需要做的事情，並進行每周進度統整 cd2024 2a w8 產品協同架構說明 協同產品設計實習課程使用網際內容管理系統, 採 Github Classroom 建立分組倉儲, 並由學員自行利用 cmsimde_site 作為 Github 倉儲的引擎目錄, 利用 Python 執行網頁編輯. 之後再轉檔為靜態網頁, 以便利用 Github Pages 所提供的 WWW 伺服器呈現協同產品設計過程的相關多媒體內容. 除了章節式的網站外, cmsimde_site 還額外利用 Pelican 管理使用者所建立的網誌, 以及利用 Reveal 管理使用者所建立的網際簡報. 在使用者每週的內容管理過程, 由於必須採用 Python 執行網頁編輯, cd2024 課程採用了四種不同的方法進行, 其中包括 Replit 、 Codespaces 、 Gitpod 以及 localhost. 由於前三者屬於雲端作業, 各有不同的使用規定與免費使用權限, 對於多人協同的產品設計團隊而言, 可以根據各自的喜好與環境選擇合用的網頁編輯工具, 且在多方了解下也可透過實際使用發展中的雲端 IDE 環境, 一窺未來可能的 AI 導引前景.","tags":"w8","url":"./41023124_2024-Spring-w8-blog-tutorial.html"},{"title":"2024 Spring 課程w7","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w7 協同產品設計實習的第七週, 本週為清明連假期間，觀看老師blog網站更新之內容，調整個人與組別markdown下.md與slug之名稱，防止群組組員submodules中的資料衝突無法更新latex 其中首先要求各組員必須每週在 cd2024 倉儲中的 markdown 目錄編寫 markdown 網誌文章, 再經由 Pelican 轉檔至 blog 目錄中的超文件網誌. 由於 Pelican 採用 Python 檔案進行設定, 因此可以在轉檔的過程中, 將各子目錄中的組員倉儲網誌集合到分組倉儲中的 combined_markdown 目錄之後, 再指定將網誌超文件轉至各分組倉儲的 blog 目錄. 由於分組網誌內容協同時, 所有組員所編寫的 markdown 文章必須存入 combined_markdown 目錄, 因此 markdown 網誌文章檔案的命名不可重複, 且各網誌文章的 Slug 字串將會被當作用來命名轉檔後的超文件檔案名稱, 因此也不能重複. 至於當各組員採用 Replit 維護個人倉儲內容時, 可以直接從 Replit Connect 至 Github 取得維護倉儲的權限, 旦卻無法直接用管理分組倉儲, 因為各組員雖然擁有管理分組倉儲的權限, 但是無法在 Replit 中以免費的組員帳號管理 Github Classroom 所取得的分組倉儲. 而必須動態納入針對分組倉儲的 OpenSSH 管理權限.","tags":"w7","url":"./41023124_2024-Spring-w7-blog-tutorial.html"},{"title":"2024 Spring 課程w6","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. w6 更改個人.md與slug名稱加上個人或群組分組 更新分組倉儲中的分組倉儲 cd2024 2a w6 取下子模組, 以及更新學員倉儲內容 1. 教學影片如下: cd2024 2a w6 利用 pelicanconf py 整合各組員的網誌 2. 教學影片如下: 教學影片分組整理並自評","tags":"w6","url":"./41023124_2024-Spring-w6-blog-tutorial.html"},{"title":"2024 Spring 課程 w5","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w5 協同產品設計實習的第五週, 教學內容為先前影片整理、分組網誌的統整，並將第四周第六組所有影片統整至下方 教學影片分組整理並自評 請各組自行搜尋前面已經發布的教學影片, 分別為 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回 github cd2024 2a 1 blog setup cd2024 2b 1 建立個人課程倉儲與網站 cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github cd2024 2b 3 如何設定 Github 帳號的雙重認證 cd2024_2b_7_w2 利用 codespaces 維護分組網站 cd2024_2b_6_w2 從第一組空倉儲建立 cmsimde_site 內容 cd2024_2b_5_w2 第一組組長建立 Team 並設定分組倉儲 cd2024_2a_w2_1(41023239楊祐銘) cd2024 2a w2 4 利用 Replit 管理 Github Classroom 分組倉儲(41023239楊祐銘) wcm2024_1a_w3_2_將組員的個人倉儲納為分組倉儲的子模組","tags":"w5","url":"./41023124_2024-Spring-w5-blog-tutorial.html"},{"title":"2024 Spring 課程 w4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w4 w4 本周為協同產品設計實習的第四週, 本周進度為將先前 教學影片分組整理上字幕並且將自己做得給自評 w4 2a 分組任務 請各組自行搜尋前面已經發布的教學影片, 分別 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 cd2024 2b 3 如何設定 Github 帳號的雙重認證 影片字幕 影片敘述 : 因為github政策更改，所以所有用戶必須在時限內雙重認證，不然將會被github鎖定mail，所以本影片利用綁定智慧手環、手機下載 Authy 的免費 Apps ，幫變綁定與認證github驗證碼與成功雙重驗證等等 cd2024_2b_3_如何設定 Github 帳號的雙重認證.txt 逐字稿 txt 丟至 downloads 好所以雙重認證啊其實就是 你在電腦上要登入的話 比方說我這個字所以能夠登入啊 我是已經通過他的雙重認證 查驗 所以你要設定的話你 你必須要登入到github 我就第一次當然不可能雙重認證 然後你進來就要趕快跑到這個帳號 帳號的設定區 然後找到他的這個密碼跟認證這一個 項目 passwords這個是密碼 authentication是認證 然後你給他點進來 然後他這個內建底下這邊啊他這個應該是沒有啟動了 雙重 雙重認證 然後你給他啟動的話像我是綁定 我這個是綁定到 我的手錶 假如你有智慧手錶跟手機可以連的話 你就可以安裝這個 只有這個是免費的 Ok只有這個是免費 那手機也可以安裝這個叫你要的話 你手機就 搜尋一下這個authy app 然後你手機也可以用 OK 好那只有這一個套件是免費可以 把那個密碼因為你在像我在Apple Watch我是可以把手機上的這一個apps 安裝在手錶上 所以你就只要帶手錶不需要帶手機 就這樣 好所以你聽到這裡面啦我們想要讀一下 因為他這邊即便是簡體中文啊 他還是英文啊所以你看 他這邊怎麼講 他說從 因為我們上學期就知道了嘛 從2023的3月 到年底 逐漸的開始強制 所有用戶 都必須要用雙重認證 所以你只要有以前舊的帳號一定記得要趕快設因為他不知道什麼時候 OK 他這裡啊給你45天啊 我給你45天因為你建帳號之後45天內你一定要趕緊把它弄起來沒有的話就進不去了 那舊帳號我就不曉得他的他的policy怎樣然後你的帳號因為沒有雙重認證被鎖定 你只好重建 重建的部分不能用原來的那個email就比較麻煩 因為他每一個email只能 在這個github他們上登記一次 然後那他的使用就是除了連到這邊之外 他其實是利用 利用這一個二維條碼所以你只要看他下面的說明啊 有沒有 這個是我們剛講的帳號下的設定 然後選擇到密碼跟認證 好然後在這個區域在這個區域啊 你點選說我要啟用 雙重認證 英文的話是enable 那你假如 知道這個是啟用之後啊 他這邊就會出現一個二維條碼 所以這個二維條碼你就必須要用你的 手機 打開你的mobile意思就是給他的mobile裡面他會有一個 相機的選項 然後拍這個二維條碼 然後他 基本上他就會秀出啊 你可以輸入到github的 數字 就這樣 然後一旦設好之後很重要的一點啊 好像這個就是二維條碼然後你說那麼完之後很重要的一點啊你一 要下載這一個 回覆的這個字串 他叫做recovery Codes 萬一你的手機壞掉 或者是你的手機不見 你沒辦法用啊因為這個時候你就要靠這個回覆嗎來 取回帳號 就這樣啊這個回覆嗎你要嘛把它存在隨身碟要嗎把它同時送到你 遠端的 比較常用的電子郵箱 那保證說 最後 萬一相關的設定都在手錶或手機上的不見了你還 可以拿這一串是一堆一堆這個編碼的數字加上 來取回你的這個帳號 而且你一定要 把它下載否則它是上面會有一個選項他說你存了之後啊你說我已經存 我的回覆碼 然後這個時候你才可以把兩段因為他很害怕萬一你的這一個兩段式 認證出問題的話這個帳號形同是沒有任何人可以登入 那假如你是付費的話你還可以請他幫你處理 我要去打電話也許要從你的這個帳號因為你付費的他有認證碼 信用卡或者用什麼樣式用什麼方式來付錢對吧你說我就是 也許還可以拿回來但是因為我們是免費的 免費帳號是沒有這個金流的部分所以只靠這一個回覆碼來取回你的認證 好像我們這個影片就可以把它存起來 然後是在這裡 cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github 影片敘述 : 本次上課內容與github和replit息息相關，如果需要使用replit協同、同步更改github上的內容，就需要利用本影片的步驟，進行github account 上的設定與 replit 去做連結，使其可以相互信任。 cd2024_2b_2_如何從 Replit Account 設定 Connect 連結到 Github.txt 逐字稿 txt 丟至downloads 開始啊 我們就連到我登入這裡你必須要登入到 你必須登入到github 然後同時啊 登入到replit 所以你必須要啊先把兩邊把它連起來 意思就是說你要跑到你的 replit的這個帳號下 這是你replit的帳號 你要點選他的account 這是你帳號下面的這個帳號 設定 所以我點選這個的話我目前啊 在底下這裡其實我已經有連結了 兩邊能不能信任 靠的就是這個連線的服務 就是這個 假如你已經出現disconnect 表示這一個你已經做過 假如你是出現connect表示還沒有連結 最假如你本身的github是對應到connect 你就給他點下去 他會在你的電腦安裝一個應用程式 Ok表示你授權 可以兩邊可以互通 互通之後的帳號就會長這樣 你想要連結到帳號下的設定 OK 那他底下這邊就有一個應用程式 這個是帳號 在整合區 Integration是整合的意思 他底下他就有一個Applications 去找你兩邊的這個信任是成功的 你點選這個Applications他就會出現這個 所以你假如有Application下面有replit 表示你的github跟replit兩邊是信任 意思就說你待會假如吧 倉儲啊輸入到你的replit 改版完是可以推回來 這個就是我們要的 我說這個是第一部所以我們確定有這個之後啊 我們待會再來做inport的動作所以我們這個小影片我們先把它 拍下來ok所以我們小影片這一小段喔 我們先拿 cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回 github 影片敘述 : 在本影片中，老師講述了如何在replit創造github的專案，詳細的講述每個指令的功用與意思，並敘述基本的指令與如何進行維護github的倉儲，說明如何將倉儲 import 至 Replit 改版後推回 github。 cd2024 2b 4 說明如何將倉儲 import 至 Replit 改版後推回.txt 逐字稿上傳至 downloads 逐字稿 所以我們這邊必須要先知道就是說我們用的這一個 tempreat就每一個人現在其實內容都一樣 但是你必須要 想辦法在replit上面 來編輯因為你在近端的話也可以我們就要設key 那個我們後面才會提到因為你在協同的時候 不見得所有人都能上網 OK 意思就說他可能某一個時段他根本不用上網 我還是可以做 把我提交了幾次之後 等到我能上網的時候我再把他推送 那你中間的改版啊可能8個人到時候你是需要合併了 那個合併或者解決衝突啊其實才是協同的一個問題 那你之前上電腦輔助設計你應該有碰到 只是說在協同的時候啊 應該解決衝突的這個機會更多所以你必須要對這個系統有一點 有更多的了解 比方說所謂動態網站的資料 Ok 其實是位在 Config Content HTM這個檔案 轉換完成的靜態資料是位在content的這個目錄下 這是第一個要知道了 那之前 其實我們用蠻久了齁 另外這個網站的原始檔是位在markdown 所使用的網誌系統我們用的用python寫的這個早就在裡面 只是我們之前都沒有 特別把他提出來也沒有要求你要寫我那就這學期沒有考試喔 重要的是每個禮拜你都要有進度註記 那這個就 其實跟考試是一樣啊 看你東西有沒有做出來你8個組員反正有沒有貢獻其實你的 這個組員都很清楚啦 所以用的這個轉換完成的這個網頁就位在blog 就好像我們現在看的 我們看的這個網址 這個是我們倉儲的網址 對應的網站網址 然後你只要打blog他就會出現 底下從indesk假如我們把這個 直接打到這個blog 他就會有一個 Indesk的網頁來派送所以我們打到這邊這個就是你的 網址 也就是內容管理的網址再加上blog我們打看看 喔他就跑到這個外面這一頁 那我們現在就是要教你怎麼去設定他 讓你可以有這樣的一個連結 這個時候還是一樣回到我們的 這個倉儲裡面 所以你現在假如正在看你的這個markdown 基本上還沒有inport進來嗎 Ok所以這裡變成說好那我們已經有設定兩邊連線我們這邊要 怎麼把他弄進去 我們現在 已經登入到replit Ok而且我們要確定 這個連線的部分啦已經完成 意思是說你 兩邊的服務 待會我們inport到replit改版完是推的回去的 Ok我們先來看 所以我們就要從create可以一個專案 現在你應該是已經登入到replit 好啦當然剛剛我們一樣也是登入到github 所以這個時候我要建立一個repl 好謝你點這個create repl 我們是要 從github 所以我們選的是這個 我們並不是一個完全空的我們選的是inport from github你點選這個 馬上會出現你剛剛建的 他馬上 會出現你剛才建的 帳號下的這一個 CD2024 有沒有看到 好所以你就直接在這個打勾說我要 導入的就是這一個倉儲 那這個倉儲因為是用python寫的所以你語言這個部分 你必須要把內建的Note點js 要改 改成python Ok然後再 他的表單這邊點選一下 最確認說你是inport from github 然後語言也選了正確的python之後 你在按這一個inport from github 我要再這樣的一個條件下導進來 好像我就按inport他就開始幫你轉了 我們必須要在這個平台上面 安裝模組 他並不知道我們要跑的套件是什麼 欸我們現在要跑的是網際內容管理嗎 那他需要 對應的這一個倉儲 最其實要的是這一串 那怎麼辦因為我們現在就按到 在這裡啊我們我們要打的是這個先看看能不能夠用複製的 所以你第一步就在readme .md這邊啊你看看能不能複製 看看能不能複製 可能真的要打喔當然網頁的部分應該是可以複製 可是要執行啊我們必須要在這個shell 命令區 console Output就是你執行的部分然後這個shell是要執行命令 所以我們第一個就是要先把這個檔案啦設定可以執行 那我們先想辦法把這個chmod u+x init_replit 底線那其實他那個init_replit是一個我們已經安排在裡面的檔案 好那我們看能不能把它貼上 好他會問你說到底 有沒有 授權給這個網頁 你可以把複製的部分檔案貼上來我說可以 他就貼上來他至於這個指令是什麼意思 這個指令是要跟我要改變啊檔案的屬性 Ok空一格 後面就是他的選項 U代表的是user x代表是執行 所以使用者要讓他可以加上執行的屬性 針對的是哪一個檔案呢針對的是這個檔案 所以這個指令一執行這個檔案原來不能執行馬上就可以使用者馬上可以執行 不知道裡面有東西改變了他會重新載入這個 shell的部分 好然後接著 就是執行他的執行一定要有 現在所在的目錄 下面的這個你怎麼沒有打前面的這個點加斜線他不會他不知道你要執行哪一個檔案 好這樣的話他就會幫你安裝模組 Ok意思就是說我們要按這個run之前你就必須要 先根據 這readme.md下的檔案的這兩個步驟 而且要在shell面執行 好那一段 他這裡全部執行完的話 他就會回復到 回復到他的這個回應 那這個回應的部分我們假如要把上面的已經執行完的訊息啊 要把它清除的話我就打clear clear在Linux的一個指令 清除畫面的意思 Windows下面cls是一樣的 我因為我們家有在Windows有沒有 我們有時候在這裡面我們有一些畫面 假如在Windows你要把它清除是CLS Clear scream 是Windows dos的指令 因為是Windows dos先出來 不好意思用同樣了 cls 一樣清除畫面的意思 我說剛剛我們打的是CLS 這個是在命令列 假如畫面就叫CLS然後在linux的話 他是叫clear 因為他有很多視窗你要在這個視窗上你滑鼠就要點這邊他這裡要變黑的 你現在在這裡 你案enter是作用在這裡 是作用在這個小頁面上 那我們為了要執行他 你必須要滑水點在這個他才知道所以這個會變黑的 好那一案enter他就會清除畫面 安裝的所需模組之後你的run應該就有作用 撒花之後他就開始 在你剛才安裝的這些模組的平台 環境中來執行執行哪一個 其實他是執行main.py 那我怎麼會知道耶 好那這邊有一個設定 你假如吧 隱藏的檔案秀出來 我再一次喔 在這個檔案區有沒有那個檔案區有時候會不見喔 有時候會不見 給你按這個他就跑出來 這裡這個 好那這個檔案區的 顯示這邊啊有一些檔案是隱藏起來 這個是專門看要不要秀出這個 檔案的顯示 有一些檔案他是隱藏起來 假如你點選這個顯示隱藏檔 就是顯示碼 隱藏的隱藏檔案一點他的話 底下有兩個重要的檔案 這兩個設定檔config file就是設定檔 其中很重要的是這個檔 點replit 好那意思就說你按run到你他做了什麼你點他就知道了其實你點run 你點run啊其實他就是呼叫python3 main.py 就啟動那main.py是什麼 main.py其實是一堆 執行程式所以我們把main.py帶出來這裡面 因為他這裡面會牽涉到兩層 兩層的啟動這個 是內容管理裡面 那我們必須要知道說原來他就是透過 python3來執行就好了 這是我們編寫的網際內容管理系統 那一旦你 啟動之後 他的這個webview 我們可以把他拉到同一個畫面 待會我們要編輯檔案會比較有比較大的範圍 正把這些小頁面都把它拉到一起 要待會我們其實是要 抓出檔案在這裡來設定 好那我們要設定的部分假如你想要看看我們之前用過的 編輯 你就可以直接用滑鼠右鍵把這個login在分頁中把它打開來 我是這樣意思就說 他就會給你一個網址可是這個網址對你來講 沒有人可以知道你現在這個網址是什麼 這表示說你講的是一個人使用的話 你不需要去 把設定的這個密碼 用sercret代替不用你就直接用admin就好了 這個小寫的admin 就是跟近端編輯是一樣的 因為這一串就是保護你 admin admin小寫這個就是管理者的密碼 被你admin你就直接進去啊 那你要讓其他的人來分享 分享這個編輯 admin其實也可以 但是萬一你這個 連結的部分表說你現在 把這一串連結 劃到不同了 瀏覽器上面 那我這邊 我有登登入所以不行你可以試試看 這一串連結只要知道的人就可以用admin進來編輯 簡單講就這樣 好所以你應該馬上可以 編輯這一串 你的網頁在哪裡啊 從剛剛設的就知道啦 我們剛才是在這個帳號下的倉儲對吧 然後我們倉儲裡面有建一個CD2024 所以這個是你的倉儲好了把它copy下來 那我們剛才編輯的這裡面我們填入倉儲的位置 網頁我們假如自己知道的話自己拼出來假如你直接想要從裡面copy 也可以 進到setting 然後進到pages 這個就是你的倉儲 是你的網頁 好這個把他copy過來 copy一樣 把它放到你的網頁去 可是問題來啦 網誌跟簡報呢你必須要想辦法在這個連結後面加上blog 加上review 可是你假如直接用剛才copy的那個網址 你把它貼上來之後 你在打blog 那這樣沒有辦法變成 的連結對不對 那這裡要怎麼辦 我想要有前面這一個網頁的純字串我不要你 附加html的資料 那怎麼辦 我們就可以回來回來 然後把這個刪掉 問題是我們這個上面複製的部分要漂白 那通常漂白可以跑到這裡 這個區域因為這個是純網頁所以你把它貼上來 複製 html連結就不見 這個時候你不要用OK啦因為這裡面其實是讓我們放 程式碼的地方只是我們要利用這個網頁的表單 把附加的超文件刪掉這個時候你再貼回來他就是乾淨的字串 我說這個這個做法一定要把它學起來當然你也可以回到 Windows的編輯器來漂白只拿到他的這個字串所這個時候啊你想要 畫面直接在打blog在案enter 然後他就ok 不然的話你還要進入這個超文件編輯在那邊搞半天 所以這裡面變成說通常這個是我的做法 所以是這樣的話你的 簡報就是純文字 再加上review 這樣的話你就可以把你對應的about裡面的這些資料都把它填好 OK 那至於底下這個跟我們不相干的我們就可以把它刪掉 然後再把他按safe 至於我們上面這個有關Cmsimde的說明我們把它寫在第二頁 我不要說這個SMAP就是 你按的話他會按到幾次列出目前的所有 因為我們現在都是一階的嗎所以你可以選他 他就會show 這個部分 我們要改config說你現在想要改config 要改這個頁面 標題 你就按config Ok然後我們這邊我們是 所以我自己去 是我的帳號 cd2024 send 這個時候我要把現在這個版本 我要把它送到我真正的github page 叫他背景上 我就必須要先 按一下convert 我要他轉成靜態 這個時候再回來 我們現在需要git git的工具在哪裡跑到底下可以來找 你按一下看一下這個裡面他就有git底下他就有git這個小頁 所以他已經知道你從這裡就可以看出我現在有改版的部分就在這裡 我說這個也是replit不斷地在進化對不對好所以我們到這邊來講我們就 我們已經修改 網站標題 而且 而且怎麼樣在about 頁面 填入對應的所以我們剛剛做什麼 我們填入在about頁面填入 正確的 倉儲 網誌 網站連結的這個是每個人都不一樣因為你的帳號不一樣啊 你的github帳號會對應 不一樣的 倉儲的連結網製的連結網站的連結 我們剛剛就做了這些改變這個時候我們把它 讓他提交 提交之後他這邊就會出現這樣 你去看喔 這個就是遠端remo就是遠端 所以他會說update跟遠端同步的就是一個提交 底下我們剛剛提交的那個部分啊 還沒有push 還沒有推到遠端 那我們就推就好了嗎 因為權限剛剛已經建立了嘛所推的時候他就出現這個 你要確認confirm comfirm是確認 確認這一個階段所完成的改版 要不要推上去假如不要就案deny 假如要 後面這個確認確認 他就會推上去因為權限剛才考那個時候已經建立 好所以表示說這個已經上來 表示說我們現在見的這個 已經跑到 目前在轉檔 這個就是剛剛提交的內容 就這樣 待會我們的遠端網站 就會跟動態網站的內容同步 好說我們先把這個影片我們先把它存下 待會我們再來設定完 網誌的部分","tags":"w4","url":"./41023124_2024-Spring-w4-blog-tutorial.html"},{"title":"2024 Spring 課程 w3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w3 w3 W3 任務交付與w3-2中的教學影片進行操作 cd2024 w3 任務 1. 請各組將組員的個人課程倉儲 cd2024 設為分組倉儲 2a-midag1 的子模組, 且以各組員的學號作為子模組的名稱 2. 請各組員將負責分工處理的 https://webthesis.biblio.polito.it/16429/1/tesi.pdf 中英文並列資料 (LaTeX) 放在個人的倉儲網站, 最後在分組倉儲中整合建立出各組的期中報告 pdf 檔案 w3-2 本周為第三周，進度是照著網誌中的影片將組員的個人倉儲設為分組倉儲子模組與有關 LaTeX 轉 pdf 在 Windows 環境, 說明如何利用 LaTeX 協同建立分組報告。 2024 Spring 協同產品設計實習的第三週, 主要說明如何善用 Github Codespaces 與 Gitpod, 以及將組員倉儲設為分組倉儲的子模組, 同時導入 LaTeX 轉 pdf 機制, 啟動期中分組報告的製作. 列出期中分組倉儲與網站 cd2024 期中分組倉儲與網站 期中協同分組報告 請參考 https://github.com/mdecd2024/test-ag1 中的 latex 目錄與 downloads 目錄中的 https://github.com/mdecd2024/test-ag1/blob/main/downloads/report_github.txt 並根據下列教學範例: 說明 如何將 41123130 的個人倉儲設為 2a-midag2 分組倉儲的子模組 說明 如何將組員的個人倉儲納入分組倉儲成為子模組 說明 如何在 Replit 維護分組倉儲","tags":"w3","url":"./41023124_2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程 w2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w2 第二周進度 協同產品設計實習的第二週, 主要利用 Github Classroom 進行分組, 並跟著老師操作與使用Codespaces、近端與Replit進行倉儲維護，並跟著下方所錄的教學影片進行操作。 利用 Codespaces 維護倉儲與網站 說明 如何利用 Github Codespaces 維護網站內容 在近端執行動態網站 說明 如何利用近端可攜系統維護分組網站 說明 甲班第一組組長如何建立 midag1 Team , 並利用 Codespaces 維護 2a-midag1 分組倉儲 說明如何 利用 Replit 管理從 Classroom 取得的分組倉儲 待各分組的期中報告 Team 與倉儲全部建立就緒後, 則甲班學員後續可配合期末作業名稱 2a2, 由甲班各組組長建立 Team finalag1, finalag2 ....等. 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 期中分組作業名稱甲班為 2a, 其中甲班第一組組長必須建立名稱為 midag1 的 Team, 讓第一組的組員員加入. 其餘各組的期中報告 Team 名稱則分別為 midag2, midag3 .... 根據上述規劃, 甲班第一分組的期中協同倉儲將位於: https://github.com/mdecd2024/2a-midag1 , 第一組的期中報告網站將位於: https://mdecd2024.github.io/2a-midag1 .","tags":"w2","url":"./41023124_2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./41023124_2024-Spring-w-blog-tutorial.html"},{"title":"2024 Spring 課程 w1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 每周進度報告w1 第一周進度 依照mde.tw/cd2024中的 Topics / Video中的影片，觀看與進行創建倉儲與帳號 建立個人課程 cd2024 倉儲與網站的操作影片 (7:17) 設定 Replit 與 Github 應用授權的說明影片 (2:44) 說明如何設定 Github 雙重認證 (6:28) 說明如何利用 Replit 對 cd2024 改版 (20:16) 照著影片中的步驟創建個人的cd2024倉儲與網站與如何與Replit連結Github，並更新上推至倉儲去做更新 設定網誌 利用 [OBS] 加上廣播系統錄製的: 如何設定個人倉儲中的 Pelican 網誌","tags":"w1","url":"./41023124_2024-Spring-w1-blog-tutorial.html"}]};