# Bipane

English | [日本語](#日本語)

> **Explore Me is now Bipane** (from version 0.11.0). Same app, new name: an installed Explore Me updates itself and keeps your settings, tabs and pins. If you had pinned it to the taskbar, pin it again. The terms of use change only in the name, effective October 5, 2026 ([LICENSE](LICENSE)).

**File Explorer, in two panes.** Bipane is a tabbed, dual-pane file manager for Windows that looks and works like the Windows 11 File Explorer, so there is nothing new to learn. It adds what File Explorer does not have.

![Bipane with two panes: photo thumbnails on the left, a website project on the right, and a preview of the selected photo](images/en/hero-dark.png)

**[Download the latest version](../../releases/latest)** · free · Windows 11 (64-bit) · English and Japanese

- **Two panes that work together.** Shift+F5 copies and Shift+F6 moves the selection to the other pane, and the panes can follow each other into subfolders
- **Quick Look, built in.** Space shows a large preview of photos (HEIC and camera RAW too), video, PDF and Office files, and the arrow keys go through the folder. Nothing else to install
- **Undo that brings files back — even after the app was closed.** An Undo button right after a delete, move or copy, and the Activity history (Ctrl+Shift+H) to undo earlier steps, also from before a restart. A file replaced by a copy or move goes to the Recycle Bin (on local drives), so Undo restores it too
- **Compare two folders, cull photos.** Shift+F2 marks what differs between the two panes' folders and copies just that across. In Quick Look, 1–7 put color labels on photos and Delete removes one — its RAW file too — with Ctrl+Z to bring it back

## How is it different?

Compared on September 26, 2026 with File Explorer on Windows 11 25H2 (build 26200) and with [Files](https://files.community) 4.2.9 (the last two rows on September 27, with [PowerToys Peek](https://learn.microsoft.com/windows/powertoys/peek) as documented on August 25, 2026).

| | File Explorer | Files | Bipane |
| --- | --- | --- | --- |
| Two panes | — | ✓ | ✓ |
| Copy or move the selection to the other pane with one key | — | — | ✓ Shift+F5 / Shift+F6 |
| Panes that follow each other into subfolders | — | — | ✓ |
| Quick Look with Space | With PowerToys Peek (installed separately) | Opens Peek, QuickLook or Seer (installed separately) | ✓ Built in |
| Search through subfolders with Everything | — | — | ✓ When Everything is running |
| Flat view (the files of all subfolders in one list) | — (a search for `*` comes close) | — | ✓ |
| What takes up the space in a folder, largest first, as bars | — | — (folder sizes in the list) | ✓ |
| Named sets of tabs to save and reopen (workspaces) | — (reopens the last tabs at sign-in) | — (reopens the last tabs) | ✓ |
| An Undo button right after a delete, move or copy | — | — | ✓ |
| Undo from a list of past steps, also after the app was closed | — (Ctrl+Z only) | — (Ctrl+Z only) | ✓ Ctrl+Shift+H |
| What was deleted from this folder, from the Recycle Bin | — (the whole Recycle Bin) | — (the whole Recycle Bin) | ✓ |
| Each copied file read back and compared with its original | — | — | ✓ In Settings |
| Failed items listed at the end, with a retry of just those | — (stops and asks at each one) | — (asks when a file is in use) | ✓ |
| Compare the two panes' folders, then copy just the differences across | — | — | ✓ Shift+F2 |
| Cull photos while viewing them: color labels with 1–7, a RAW file deleted and labelled with its JPEG, Ctrl+Z | — (PowerToys Peek can delete, nothing more) | — (the Peek it opens can delete, nothing more) | ✓ In Quick Look |

Where the others are ahead: File Explorer is built into Windows, and the Open and Save dialogs of other apps are always File Explorer. Files has themes, Git integration, tags and a column view, runs on Windows 10 and ARM64, and is open source.

**Speed**: the time from opening a folder from the command line until its item count shows (median of 5 on the author's PC, Windows 11 25H2, September 26, 2026).

| | File Explorer | Files 4.2.9 | Bipane 0.6.0 |
| --- | --- | --- | --- |
| C:\Windows\System32 (4,819 items), the app not running yet | — (always running) | 2.9 s | 0.8 s |
| The same, the app already running | 1.0 s (a new window) | 1.0 s (a new window) | 0.2 s (a new tab) |
| A folder of 10,000 files, the app already running | 1.1 s | 1.1 s | 0.2 s |

Inside the app, a folder of 100,000 files opens in about 0.3 s (0.13.0, October 7, 2026; 0.9 s in 0.6.0). Photos that Windows has no thumbnail for yet are made side by side, from the top of the screen down: a screen of 16 phone RAW (DNG) photos fills in about 2 s, where Windows alone makes them one at a time (about 13 s). With System32 open, Files used 249 MB of memory and Bipane 175 MB (private working set, what Task Manager shows).

## Features

- The same keys and right-click menu as File Explorer (plus the full Windows menu under "Show more options")
- A command palette (Ctrl+K) that finds commands and folders by name
- A preview for many kinds of files: photos including HEIC and camera RAW (through the codecs in Windows), video and audio, PDF, Word / Excel / PowerPoint and OpenDocument files (without Office), EPUB, fonts, the contents of archives, who signed a program, and the details File Explorer shows (duration, camera, author…)
- Workspaces (save and reopen a whole set of tabs), color labels, and the Shelf (collect items with Ctrl+S, then move or copy them together)
- Disk usage, flat view, and search through subfolders (uses Everything or the Windows index when available, and then finds things as you type)
- Copy to… / Move to… (right-click): choose the other pane, an open tab, a pinned or recent folder or a drive, or type a path
- Compare the two panes' folders (Shift+F2): what is only on one side, newer, older or another size is marked and counted; show only the differences, and copy the newer items or the missing ones across
- Cull photos in Quick Look: Delete, color labels with 1–7 (or the buttons in its bar), Ctrl+Z, and actual size with Z or a click. A RAW file (and its .xmp or .aae, and a Live Photo's .mov) goes with its JPEG or HEIC. Rename by the date taken (`{date}` in Batch rename)
- Filter with wildcards and conditions (`*.jpg`, `size:>10MB`, `date:today`, `label:red`) and group by date or date taken; the sort order and grouping are remembered for each folder
- Names are found however they are written: hiragana and katakana, and full-width and half-width characters, count as the same when you filter, jump to a name or use the command palette
- A folder on a network computer that does not answer never holds up the rest of the app
- Open zip, 7z, rar, tar.gz and other archives like folders (read-only) and copy items out of them. Password-protected ones open too — a zip made on Japanese Windows keeps its Japanese names, also when it is encrypted — and the files a Mac adds (`__MACOSX`, `.DS_Store`) are left out. An archive holding a single folder is extracted as that folder, not inside another of the same name
- Create zip in one click, or 7z (with a password if you like: AES-256, the names encrypted too), tar and tar.gz
- Free space is checked before copying, and on FAT32 drives files of 4 GB or more are left out with a note, instead of failing at the end
- A copy or move that could not do everything goes on with the rest and lists what failed and why at the end, with a retry of just those items. Optionally, each copied file is read back and compared with its original (Settings → Behavior); a move to another drive removes the original only after that
- Activity history (Ctrl+Shift+H): undo past copies, moves, deletes and renames from a list, also after the app was closed, and see what was deleted from the current folder and put it back
- Pins shared with Windows' Quick access (on by default): File Explorer and the Open / Save dialogs of other apps show the same pinned folders, in the same order and under the same names, and a pin made in File Explorer shows up at once. A pinned folder renamed in Bipane keeps its pin, in its place
- Stay in the notification area when closed (optional): the next window comes up at once, and Bipane can start with Windows without a window
- English / Japanese, light / dark, and a background picture of your own behind the lists if you like

## Is it safe?

- **Nothing about you or your files is sent.** The only network access is the update check to GitHub, and you can turn it off (Settings → About)
- **It does not change how Windows opens folders** unless you turn on "Open folders with Bipane" or "Open Bipane with Win+E" in Settings. Turning them off, or uninstalling, puts back what was there before
- **Pinning a folder in Bipane pins it in Windows' Quick access**, since the pins are shared by default (File Explorer shows the same pins). Turn sharing off in Settings → General; your pins stay in both
- **It starts with Windows only if you turn on "Start when I sign in"** (Settings → Startup and windows, with "Stay in the notification area when closed"). Turning it off, or uninstalling, removes the startup entry
- **Deleted items go to the Recycle Bin** (on drives that have one). Only Shift+Delete deletes them for good, and it always asks first
- **The installer is not code-signed**, so Windows may warn you the first time you run it. Each release lists the installer's SHA-256 (see [Download](#download))

## Screenshots

**Two panes**: select items and press Shift+F5 to copy them to the other pane.

![Selecting three photos and copying them to the other pane with Shift+F5](images/en/copy.gif)

**Quick Look**: press Space for a large preview, then the arrow keys to go through the folder.

![Opening Quick Look with Space and moving through photos with the arrow key](images/en/quicklook.gif)

**Undo, even for a replaced file**: when a file with the same name is already there, it shows which one is newer. Overwrite it, and Undo brings the old one back from the Recycle Bin.

![Copying a newer Budget.csv over an older one in another folder, then Undo puts the older file back](images/en/undo.gif)

**Archives open like folders**: open a zip, then copy what is inside to the other pane with Shift+F5.

![Opening Photos 2026.zip like a folder and copying its three photos to the other pane](images/en/archive.gif)

**One pane or two**: switch from the command palette (Ctrl+K) or with Ctrl+Shift+D. Alt+P shows or hides the preview.

![Switching from two panes to one through the command palette, then hiding and showing the preview](images/en/layout.gif)

**Light theme**, with a Markdown file in the preview:

![The light theme with a README rendered in the preview pane](images/en/light.png)

## Usage

It works like File Explorer. Press **F1** in the app for every shortcut, and **Ctrl+,** (or the gear at the top right) for Settings.

### The window

- Navigation on the left: Home, pinned folders (the same as File Explorer's Quick access), This PC (drives), Workspaces, the Shelf
- On the right: two panes, each with its own tabs; the one you last clicked is the one you work in (Ctrl+Shift+D switches to a single pane)
- The app opens on Home (frequent places, drives and recent items)
- The language follows Windows (English or Japanese); change it in Settings → General → Language

### Common shortcuts

| Action | Keys |
| --- | --- |
| Back / up one folder | Backspace / Alt+↑ |
| Type in the address bar | Ctrl+L (Alt+D, F4) |
| Filter this folder / search subfolders too | Ctrl+E / Ctrl+Shift+F |
| New tab / close tab | Ctrl+T / Ctrl+W |
| Single pane / two panes | Ctrl+Shift+D |
| Copy / move to the other pane | Shift+F5 / Shift+F6 |
| Large preview (Quick Look) | Space |
| In Quick Look: to the Recycle Bin / color label (0 takes it off) / undo | Delete / 1–7 / Ctrl+Z |
| Compare the two folders | Shift+F2 |
| Command palette (find commands and folders by name) | Ctrl+K |
| Put on the Shelf (move or copy them together later) | Ctrl+S |
| Undo / redo (also a delete to the Recycle Bin) | Ctrl+Z / Ctrl+Y |
| Activity history (undo earlier steps, also from before a restart) | Ctrl+Shift+H |
| Large icons / medium icons / list / details | Ctrl+Shift+2 / 3 / 5 / 6 |
| Show hidden files | Ctrl+H |

- Right-click opens a Windows 11 style menu. For the full Windows menu (including items added by 7-Zip and other apps), Shift+right-click or choose "Show more options"
- Double-click an archive (zip, 7z, rar, tar.gz and more) to look inside it like a folder; copy items out with Ctrl+C or Shift+F5. "Extract here" in its right-click menu extracts all of it
- In the filter box (Ctrl+E), `*.jpg`, `ext:png`, `kind:picture`, `size:>10MB` and `date:today` narrow the list; separate several with spaces
- Drag a tab to reorder it or to move it to the other pane. When the tabs do not fit, use the ◀ ▶ buttons or the list of every tab (▾)
- Turn on "Open folders with Bipane" in Settings to open folders from the desktop and other apps in Bipane as well, and "Open Bipane with Win+E" for Win+E (it takes effect once you sign in again)
- Pin a folder from its right-click menu, or drop it on the pinned folders (Ctrl+D moves items to the Recycle Bin, as in File Explorer). To reorder or rename pins, do it in File Explorer's Quick access: Bipane follows
- With "Stay in the notification area when closed" on, × leaves Bipane running; exit from its icon's menu in the notification area

## Download

Download `Bipane-Setup-<version>.exe` from [Releases](../../releases/latest) and run it.

### System requirements

| | |
| --- | --- |
| OS | Windows 11 (64-bit, x64) |
| Windows 10 | Not tested (it is expected to work, but has not been checked) |
| 32-bit Windows (x86) | Not supported |
| Windows on ARM (ARM64) | Not tested (Windows 11 on ARM runs x64 apps through emulation, so it is expected to work) |
| Installation | Per user (no administrator rights needed); you can choose the folder |

### If Windows shows "Windows protected your PC"

The installer is not code-signed, so Windows SmartScreen may show this screen the first time you run it.
Choose **More info → Run anyway**.

To make sure the file is the genuine one, compare its SHA-256 with the value on the release page. In PowerShell:

```powershell
Get-FileHash .\Bipane-Setup-0.11.0.exe -Algorithm SHA256
```

VirusTotal: the v0.13.0 installer, [0 / 66 detections](https://www.virustotal.com/gui/file/3e31ddab629c1c5e2eca95fa2fd666cafadeeb00005c11f316df4c4132d772fc) (scanned on 2026-10-08; Kaspersky included). The 0.9.0 and 0.10.0 installers were flagged by one engine, Kaspersky (`HEUR:Trojan-PSW.JS.Stealer.gen`): a false positive, fixed in 0.10.1. Its heuristic reacted to where the app chose which file of a password-protected archive to try your password on; since 0.10.1 the app makes that choice in another part of the app and behaves the same (see the [0.10.1 release notes](https://github.com/ternando0831-lang/bipane/releases/tag/v0.10.1)). Bipane reads no saved passwords and sends nothing anywhere.

## Updates

The app checks for a new version when it starts, downloads it in the background and installs it when you quit (turn this off in Settings → About).
The update check (GitHub) is the only network access. No usage data is sent.

## Privacy

- Your files are handled on your PC only; nothing about them is sent anywhere
- The update check is a request to GitHub, which may record your IP address under GitHub's own privacy statement
- Feedback is sent from your own mail app. The author uses your email address and message only to reply and to improve the app, keeps them only as long as needed, and does not share them except as required by law. To ask about, correct or delete them, write to the feedback address shown in the app

## Uninstall

Uninstall Bipane from Windows Settings → Apps → Installed apps.
If "Open folders with Bipane" or "Open Bipane with Win+E" was on, File Explorer takes them back (Win+E once you sign in again). If "Start when I sign in" was on, the startup entry is removed. Folders pinned to Quick access stay pinned in File Explorer.

## License

Free for personal and business use. Redistribution and modification are not permitted. See [LICENSE](LICENSE).
Bundled third-party software (Electron, 7-Zip and others) is covered by its own licenses (`THIRD_PARTY_NOTICES.txt` in the installation folder). The source code of the bundled 7-Zip (GNU LGPL) is attached to each release.

## Copyright

Copyright (c) 2026 ternando0831-lang

Windows, PowerToys and Visual Studio Code are trademarks of the Microsoft group of companies. Other product names are trademarks of their respective owners.

## Feedback

Ask questions, share ideas or report bugs in [Discussions](../../discussions). You can also send them privately by email from Settings → Feedback in the app.

## Known limitations

- Of the formats other than zip, only 7z, tar and tar.gz can be created; rar, lzh and the like are extracted only. A zip with a password cannot be created (7z can). 7z is compressed on one thread, so it is slow for big folders (about 4 minutes per GB with Normal)
- An archive opened as a folder is read-only, and its items cannot be dragged out (use Copy or Copy to other side). Archives of more than 200,000 items are not opened as folders
- While pins are shared with Quick access, they cannot be reordered or renamed in Bipane (do it in File Explorer). A pinned folder moved to another place is pinned again at the end of Quick access (a rename keeps its place). Pins of the Recycle Bin and libraries are not shown
- Old Japanese archives (lzh, tar and others with Shift_JIS names) may not extract with the right file names
- The preview of Office, OpenDocument and EPUB files shows their text and tables, not their layout. Pictures such as HEIC or RAW show only when Windows has the codec for them (Microsoft Store extensions); video and audio formats the app cannot play (avi, wmv, wma…) show Windows' thumbnail and details instead

---

# 日本語

> **Explore Me は Bipane に名前を変えました**（バージョン 0.11.0 から）。中身は同じです。インストール済みの Explore Me は自動で更新され、設定・タブ・ピン留めはそのまま引き継がれます。タスクバーにピン留めしていた場合は、ピン留めし直してください。利用規約は名称だけを変更し、2026 年 10 月 5 日から効力が生じます（[LICENSE](LICENSE)）。

**いつものエクスプローラーのまま、2 画面に。** Windows 11 のエクスプローラーと同じ見た目・操作で使える、タブと 2 画面のファイラーです。覚え直すことはありません。そのうえで、エクスプローラーにないものを足しています。

![2 画面の Bipane。左に写真の縮小表示、右に Web サイトのプロジェクト、右端に選んだ写真のプレビュー](images/ja/hero-dark.png)

**[最新版をダウンロード](../../releases/latest)**（無料・Windows 11 の 64 ビット版・日本語と英語）

- **連携する 2 画面**: 選んだものを Shift+F5 で反対側へコピー、Shift+F6 で移動。サブフォルダーへの移動に反対側を追従させることもできます
- **クイックルックを内蔵**: Space で大きくプレビュー。HEIC やカメラの RAW の写真、動画、PDF、Office のファイルも。矢印キーでフォルダーの中を次々に見られます。ほかに何も入れる必要はありません
- **アプリを閉じた後でも元に戻せる**: 削除・移動・コピーの直後に「元に戻す」ボタン。前の操作は操作の履歴（Ctrl+Shift+H）から、再起動の前の分も戻せます。コピーや移動で置き換えたファイルはごみ箱に入るので（PC の内蔵ドライブ）、元に戻すで戻ります
- **フォルダーの比較と写真の選別**: Shift+F2 で左右のフォルダーの違いに印を付け、違う項目だけを反対側へコピー。クイックルックでは 1〜7 で写真にカラーラベル、Delete で削除（RAW も一緒に）、Ctrl+Z で戻せます

## ほかとの違い

2026 年 9 月 26 日に、Windows 11 25H2（ビルド 26200）のエクスプローラー、[Files](https://files.community) 4.2.9 と比べました（最後の 2 行は 9 月 27 日。[PowerToys の Peek](https://learn.microsoft.com/ja-jp/windows/powertoys/peek) は 2026 年 8 月 25 日の説明書で確認）。

| | エクスプローラー | Files | Bipane |
| --- | --- | --- | --- |
| 2 画面 | — | ✓ | ✓ |
| 選んだものを 1 キーで反対側へコピー・移動 | — | — | ✓ Shift+F5 / Shift+F6 |
| サブフォルダーへの移動に反対側が追従 | — | — | ✓ |
| Space でクイックルック | PowerToys の Peek（別に入れる） | Peek・QuickLook・Seer を呼ぶ（別に入れる） | ✓ 内蔵 |
| Everything でサブフォルダーを検索 | — | — | ✓ Everything が動いているとき |
| フラット表示（サブフォルダーのファイルを 1 つの一覧に） | —（`*` の検索が近い） | — | ✓ |
| フォルダーの中で場所を取っているものを、大きい順に棒で | — | —（一覧にフォルダーのサイズ） | ✓ |
| 名前を付けたタブ一式の保存と呼び出し（ワークスペース） | —（サインイン時に前のタブを開く） | —（前のタブを開く） | ✓ |
| 削除・移動・コピーの直後の「元に戻す」ボタン | — | — | ✓ |
| 前の操作を一覧から元に戻す（アプリを閉じた後でも） | —（Ctrl+Z だけ） | —（Ctrl+Z だけ） | ✓ Ctrl+Shift+H |
| このフォルダーで削除した項目を、ごみ箱から一覧 | —（ごみ箱全体） | —（ごみ箱全体） | ✓ |
| コピーしたファイルを読み直して元と比べる | — | — | ✓ 設定で |
| 失敗した項目を最後にまとめて示し、それだけを再試行 | —（1 件ごとに止まって聞く） | —（使用中のファイルで聞く） | ✓ |
| 左右のフォルダーを比べて、違う項目だけを反対側へコピー | — | — | ✓ Shift+F2 |
| 写真を見ながら選別（1〜7 でカラーラベル、RAW も JPEG と一緒に削除・ラベル、Ctrl+Z で戻す） | —（PowerToys の Peek は削除だけ） | —（呼び出す Peek は削除だけ） | ✓ クイックルックで |

ほかが勝っているところ: エクスプローラーは Windows に最初から入っていて、ほかのアプリの「開く」「保存」の画面は常にエクスプローラーです。Files にはテーマ、Git との連携、タグ、カラム表示があり、Windows 10 と ARM64 でも動き、オープンソースです。

**速さ**: コマンドラインからフォルダーを開いて、項目の数が表示されるまでの時間（作者の PC、Windows 11 25H2 で 5 回の中央値、2026 年 9 月 26 日）。

| | エクスプローラー | Files 4.2.9 | Bipane 0.6.0 |
| --- | --- | --- | --- |
| C:\Windows\System32（4,819 項目）、アプリがまだ動いていないとき | —（常に動いている） | 2.9 秒 | 0.8 秒 |
| 同じフォルダー、アプリがもう動いているとき | 1.0 秒（新しいウィンドウ） | 1.0 秒（新しいウィンドウ） | 0.2 秒（新しいタブ） |
| 10,000 ファイルのフォルダー、アプリがもう動いているとき | 1.1 秒 | 1.1 秒 | 0.2 秒 |

アプリの中では、100,000 ファイルのフォルダーが約 0.3 秒で開きます（0.13.0、2026 年 10 月 7 日。0.6.0 では 0.9 秒）。Windows がまだサムネイルを作っていない写真は並べて作り、画面の上から順に出します: スマホの RAW（DNG）の写真 16 枚の画面が約 2 秒でそろいます（Windows だけでは 1 枚ずつで約 13 秒）。System32 を開いた状態のメモリは、Files が 249 MB、Bipane が 175 MB でした（プライベート ワーキング セット＝タスク マネージャーに出る値）。

## 機能

- エクスプローラーと同じキー操作・右クリックメニュー（「その他のオプションを確認」で Windows 本来のメニューも）
- コマンドパレット（Ctrl+K）で、操作やフォルダーを名前で探せます
- いろいろなファイルのプレビュー: HEIC やカメラの RAW を含む写真（Windows のコーデックを使用）、動画・音声、PDF、Word・Excel・PowerPoint と OpenDocument のファイル（Office が無くても）、EPUB、フォント、書庫の中身、プログラムの署名元、エクスプローラーの詳細と同じ情報（長さ・カメラ・作成者など）
- ワークスペース（開いているタブ一式を保存して呼び出す）、カラーラベル、仮置き（Ctrl+S で集めてまとめて移動）
- 容量の内訳、フラット表示、サブフォルダーの検索（Everything・Windows のインデックスがあれば使い、そのときは入力しながら探します）
- コピー先…／移動先…（右クリック）: 反対側・開いているタブ・ピン留めや最近のフォルダー・ドライブから選ぶか、パスを入力
- 左右のフォルダーの比較（Shift+F2）: 片側だけ・新しい・古い・大きさ違いに印を付けて件数を示します。違いだけを表示したり、新しい方や反対側に無い項目だけを反対側へコピーしたりできます
- クイックルックで写真の選別: Delete、1〜7 のカラーラベル（バーのボタンでも）、Ctrl+Z、Z かクリックで等倍表示。RAW（と .xmp・.aae、Live Photo の .mov）は JPEG／HEIC と一緒に扱います。撮影日時で名前を変更（まとめて名前を変更の `{date}`）
- 絞り込みにワイルドカードと条件（`*.jpg`・`サイズ:>10MB`・`日付:今日`・`ラベル:赤`）、日付や撮影日時でのグループ表示。並べ替えとグループはフォルダーごとに覚えます
- 名前は書き方が違っても見つかります。絞り込み・名前への移動・コマンドパレットで、ひらがなとカタカナ、全角と半角を同じものとして探します
- 応答しないネットワーク上のフォルダーがあっても、ほかの操作は待たされません
- zip・7z・rar・tar.gz などの書庫をフォルダーのように開いて（読み取り専用）中の項目を取り出せます。パスワード付きの書庫も開けます（日本語の Windows で作った zip は、パスワード付きでも日本語の名前が化けません）。Mac の付属ファイル（`__MACOSX`・`.DS_Store`）は除きます。中身が 1 つのフォルダーだけの書庫は、同じ名前のフォルダーを二重に作らずに展開します
- zip は 1 クリックで、7z（パスワードも付けられます: AES-256、名前も暗号化）・tar・tar.gz も作れます
- コピーの前に行き先の空き容量を確認。FAT32 のドライブには 4 GB 以上のファイルを置けないので、最後に失敗する代わりに、その旨を添えて外します
- コピーや移動の途中で失敗した項目があっても残りを続け、最後に失敗した項目と理由を示して、それだけを再試行できます。設定で、コピーしたファイルを読み直して元と比べることもできます（設定 → 操作）。別のドライブへの移動では、一致を確かめてから元を消します
- 操作の履歴（Ctrl+Shift+H）: コピー・移動・削除・名前の変更を一覧から元に戻せます（アプリを閉じた後でも）。開いているフォルダーで削除した項目を一覧して、ごみ箱から戻すこともできます
- ピン留めを Windows のクイック アクセスと共有（既定）: エクスプローラーやほかのアプリの「開く・保存」ダイアログと同じフォルダーが、同じ並び・同じ名前で出ます。エクスプローラーでピン留めしたものもすぐ出ます。ピン留めしたフォルダーの名前を Bipane で変えても、同じ位置のまま付いていきます
- 閉じても通知領域に残す（設定で選べます）: 次にウィンドウを開くのがすぐになります。Windows の起動時にウィンドウを出さずに起動しておくこともできます
- 日本語 / 英語、ライト / ダーク。お好みで一覧の後ろに好きな画像も敷けます

## 安全ですか？

- **あなたやファイルについての情報は送りません。** ネットにつなぐのは GitHub への更新確認だけで、オフにもできます（設定 → バージョン情報）
- **Windows がフォルダーを開く方法は変えません。** 変わるのは、設定で「フォルダーを Bipane で開く」「Win+E で Bipane を開く」をオンにしたときだけです。オフにするかアンインストールすると元に戻ります
- **Bipane でピン留めすると、Windows のクイック アクセスにもピン留めされます。** 既定でピン留めを共有しているためです（エクスプローラーにも同じピン留めが出ます）。共有は 設定 → 全般 でオフにでき、そのときのピン留めはどちらにも残ります
- **Windows と一緒に起動するのは「サインイン時に起動する」をオンにしたときだけです**（設定 → 起動とウィンドウ、「閉じても通知領域に残す」と一緒に）。オフにするかアンインストールすると、スタートアップの登録を消します
- **削除したものはごみ箱に入ります**（ごみ箱のあるドライブ）。完全に削除するのは Shift+Delete のときだけで、必ず確認します
- **インストーラーはコード署名をしていません。** 初めて実行するときに Windows の警告が出ることがあります。各リリースにインストーラーの SHA-256 を載せています（[ダウンロード](#ダウンロード)）

## スクリーンショット

**2 画面**: 選んで Shift+F5 を押すと、反対側のペインへコピーします。

![写真を 3 枚選び、Shift+F5 で反対側のペインへコピーする様子](images/ja/copy.gif)

**クイックルック**: Space で大きく表示し、矢印キーでフォルダーの中を順に見られます。

![Space でクイックルックを開き、矢印キーで写真を送る様子](images/ja/quicklook.gif)

**置き換えたファイルも元に戻せる**: 同じ名前のファイルがあると、どちらが新しいかを並べて見せます。上書きしても、元に戻すで古いファイルがごみ箱から戻ります。

![新しい予算.csv を別のフォルダーの古い方に上書きし、元に戻すで古いファイルに戻る様子](images/ja/undo.gif)

**書庫をフォルダーのように開く**: zip を開いて、中のファイルを Shift+F5 で反対側へ取り出します。

![写真 2026.zip をフォルダーのように開き、中の写真 3 枚を反対側へコピーする様子](images/ja/archive.gif)

**1 画面と 2 画面**: コマンドパレット（Ctrl+K）か Ctrl+Shift+D で切り替えます。Alt+P でプレビューの表示・非表示。

![コマンドパレットから 2 画面を 1 画面に切り替え、プレビューを閉じて開く様子](images/ja/layout.gif)

**ライトテーマ**（プレビューに Markdown を表示）:

![ライトテーマで、README をプレビューに表示した画面](images/ja/light.png)

## 使い方

エクスプローラーと同じように使えます。操作の一覧はアプリの中で **F1**、設定は **Ctrl+,**（または右上の歯車）です。

### 画面

- 左のナビゲーション: ホーム・ピン留めしたフォルダー（エクスプローラーのクイック アクセスと同じ）・PC（ドライブ）・ワークスペース・仮置き
- 右側: 左右 2 つのペイン。それぞれにタブがあり、クリックした側が操作の対象になります（Ctrl+Shift+D で 1 画面にも）
- 起動するとホーム（よく使う場所・ドライブ・最近使った項目）が開きます
- 表示言語は Windows に合わせます（日本語か英語）。設定 → 全般 → 言語 で変えられます

### よく使う操作

| 操作 | キー |
| --- | --- |
| 戻る / 上のフォルダーへ | Backspace / Alt+↑ |
| アドレスバーに入力 | Ctrl+L（Alt+D・F4） |
| このフォルダーを絞り込み / サブフォルダーも検索 | Ctrl+E / Ctrl+Shift+F |
| 新しいタブ / タブを閉じる | Ctrl+T / Ctrl+W |
| 1 画面 / 2 画面の切り替え | Ctrl+Shift+D |
| 反対側のペインへコピー / 移動 | Shift+F5 / Shift+F6 |
| 大きなプレビュー（クイックルック） | Space |
| クイックルックで: ごみ箱へ / カラーラベル（0 で外す） / 元に戻す | Delete / 1〜7 / Ctrl+Z |
| 左右のフォルダーを比較 | Shift+F2 |
| コマンドパレット（操作やフォルダーを名前で探す） | Ctrl+K |
| 仮置きに入れる（あとでまとめて移動・コピー） | Ctrl+S |
| 元に戻す / やり直す（ごみ箱への削除も戻せます） | Ctrl+Z / Ctrl+Y |
| 操作の履歴（前の操作を戻す。再起動の前の分も） | Ctrl+Shift+H |
| 表示の切り替え（大アイコン / 中アイコン / 一覧 / 詳細） | Ctrl+Shift+2 / 3 / 5 / 6 |
| 隠しファイルの表示 | Ctrl+H |

- 右クリックは Windows 11 風のメニューです。7-Zip などが加えた項目も含む Windows 本来のメニューは、Shift+右クリックか「その他のオプションを確認」から
- 書庫（zip・7z・rar・tar.gz など）はダブルクリックでフォルダーのように中を見られます。中の項目は Ctrl+C や Shift+F5 で取り出せます。右クリックの「ここに展開」で全部を展開できます
- 絞り込み欄（Ctrl+E）では `*.jpg`・`拡張子:png`・`種類:画像`・`サイズ:>10MB`・`日付:今日` で絞れます。空白で区切って組み合わせられます
- タブはドラッグで並べ替え・反対側のペインへ移動できます。入りきらないときは ◀ ▶ かすべてのタブの一覧（▾）から
- 「フォルダーを Bipane で開く」を設定でオンにすると、デスクトップやほかのアプリから開いたフォルダーも Bipane で開きます。「Win+E で Bipane を開く」をオンにすると Win+E でも（サインインし直すと反映されます）
- フォルダーのピン留めは右クリックメニューか、ピン留めの欄へのドロップで（Ctrl+D はエクスプローラーと同じく「ごみ箱へ」）。並べ替えや名前の変更はエクスプローラーのクイック アクセスで行うと、Bipane も同じになります
- 「閉じても通知領域に残す」をオンにすると、× で閉じても Bipane は動いたままです。終了は通知領域のアイコンのメニューから

## ダウンロード

[Releases](../../releases/latest) から `Bipane-Setup-<版>.exe` をダウンロードして実行します。

### 動作環境

| 項目 | 内容 |
| --- | --- |
| OS | Windows 11（64 ビット、x64） |
| Windows 10 | 未確認（動く見込みはありますが、確認していません） |
| 32 ビット版 Windows（x86） | 対応していません |
| ARM 版 Windows（ARM64） | 未確認（ARM 版 Windows 11 は x64 のアプリをエミュレーションで動かすため、動く見込みはあります） |
| インストール | ユーザーごと（管理者権限は不要）。インストール先は選べます |

### 「Windows によって PC が保護されました」と出たら

このアプリはコード署名をしていないため、初めて実行するときに Windows の SmartScreen がこの画面を出すことがあります。
**「詳細情報」→「実行」** で進めてください。

心配な場合は、ダウンロードしたファイルが本物か確かめられます。各リリースのページに SHA-256 の値を載せています。PowerShell で次を実行し、同じ値か比べてください。

```powershell
Get-FileHash .\Bipane-Setup-0.11.0.exe -Algorithm SHA256
```

VirusTotal での検査結果（v0.13.0 のインストーラー）: [検出 0 / 66](https://www.virustotal.com/gui/file/3e31ddab629c1c5e2eca95fa2fd666cafadeeb00005c11f316df4c4132d772fc)（2026-10-08 に検査。Kaspersky も検出なし）。0.9.0 と 0.10.0 のインストーラーは、Kaspersky 1 社だけが推定で検出していました（`HEUR:Trojan-PSW.JS.Stealer.gen`、誤検出、0.10.1 で解消）。パスワード付きの書庫で、入力したパスワードをどのファイルで確かめるかを選ぶ処理の置き場所に反応していたため、0.10.1 からはアプリの別の部分でその処理をしています。動きは変わりません（[0.10.1 のリリースノート](https://github.com/ternando0831-lang/bipane/releases/tag/v0.10.1)）。Bipane は保存されたパスワードを読まず、どこにも何も送りません。

## 更新

起動したときに新しい版を確認し、裏でダウンロードして、アプリを終了したときに更新します（設定 → バージョン情報で切り替えられます）。
通信するのは、この更新の確認（GitHub）だけです。使い方などの情報は送りません。

## 個人情報

- ファイルはすべて PC の中だけで扱い、外部には何も送りません
- 更新の確認は GitHub への通信で、GitHub は自社のプライバシー方針に従って IP アドレスを記録することがあります
- フィードバックは利用者自身のメールアプリから送られます。受け取ったメールアドレスと内容は、返信とアプリの改善のためだけに使い、必要な期間だけ保管し、法令に基づく場合を除いて第三者に提供しません。開示・訂正・削除のご依頼は、アプリに表示しているフィードバックの宛先へ

## アンインストール

Windows の「設定 → アプリ → インストールされているアプリ」から Bipane をアンインストールします。
「フォルダーを Bipane で開く」「Win+E で Bipane を開く」をオンにしていた場合も、元のエクスプローラーに戻ります（Win+E はサインインし直すと反映されます）。「サインイン時に起動する」をオンにしていた場合は、スタートアップの登録を消します。クイック アクセスにピン留めしたフォルダーは、エクスプローラーにそのまま残ります。

## ライセンス

無料で使えます（個人・法人とも）。再配布・改変はできません。詳しくは [LICENSE](LICENSE) を見てください。
同梱しているソフトウェア（Electron、7-Zip など）はそれぞれのライセンスに従います（インストール先の `THIRD_PARTY_NOTICES.txt`）。同梱の 7-Zip（GNU LGPL）のソースコードは、各リリースに添付しています。

## 著作権

Copyright (c) 2026 ternando0831-lang

Windows・PowerToys・Visual Studio Code は Microsoft グループの商標です。その他の製品名は、それぞれの権利者の商標です。

## フィードバック

質問・要望・不具合の報告は [Discussions](../../discussions) へどうぞ。アプリの「設定 → フィードバック」から、メールで非公開に送ることもできます。

## 既知の制限

- zip 以外で作れるのは 7z・tar・tar.gz だけで、rar・lzh などは展開だけです。パスワード付きの zip は作れません（7z なら作れます）。7z は 1 スレッドで圧縮するため、大きなフォルダーでは時間がかかります（標準で 1 GB あたり約 4 分）
- フォルダーのように開いた書庫の中は読み取り専用で、項目をドラッグして外へ出すことはできません（コピーか「反対側へコピー」で取り出します）。項目が 20 万を超える書庫はフォルダーとしては開きません
- 古い日本語の書庫（Shift_JIS の名前の lzh・tar など）は、名前が正しく展開されないことがあります
- クイック アクセスと共有している間は、ピン留めの並べ替えと名前の変更は Bipane ではできません（エクスプローラーで行います）。ピン留めしたフォルダーを別の場所へ移動すると、クイック アクセスの末尾に付け直します（名前の変更なら位置は変わりません）。ごみ箱やライブラリのピン留めは表示しません
- Office・OpenDocument・EPUB のプレビューは文字と表だけで、レイアウトは再現しません。HEIC や RAW などの写真は、Windows にそのコーデック（Microsoft Store の拡張機能）があるときだけ表示できます。アプリで再生できない動画・音声（avi・wmv・wma など）は、代わりに Windows のサムネイルと詳細を表示します
