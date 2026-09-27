# Justin Jin 个人主页模板

参考 https://gulang2019.github.io/ 的简洁学术主页风格：白色背景、灰色正文、蓝色链接、左侧个人资料和右侧简介 / News / Publications / Preprint。代码为独立编写的静态 HTML + CSS，不依赖 Jekyll、Node.js 或第三方 CDN。

## 本地查看

双击 `index.html` 即可浏览。`CV` 链接打开可编辑的 `cv.html`；该页支持打印或保存为 PDF。

也可在此目录启动本地服务：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后打开 http://127.0.0.1:8000 。

## 修改内容

- `index.html`：姓名、个人简介、联系方式、动态、论文和预印本。所有 `[...]` 都是待替换字段，不代表真实经历。没有论文时可删除对应条目或整个 section。
- `cv.html`：简历内容，同样需要替换占位字段。
- `assets/style.css`：颜色、字号、间距及手机布局。
- `assets/favicon.svg`：浏览器标签页的 JJ 图标。
- `files/`：存放简历及论文 PDF。

### 添加照片

把照片保存为 `assets/avatar.jpg`，在 `index.html` 中将整个头像占位 div 替换为：

```html
<img class="avatar" src="assets/avatar.jpg" alt="Justin Jin">
```

头像默认模仿参考站的竖向椭圆。如果希望圆形，在样式表中将 `.avatar` 的 height 设为与 width 相同，并同步修改媒体查询中的尺寸。

### 添加邮箱和论文链接

将 `[Your email]` 对应的 span 替换为真实邮箱链接：

```html
<a href="mailto:yourname@example.com">Email</a>
```

论文资源现在是普通占位文字，避免误导性的空链接。准备好文件后，将对应的 `.resource-placeholder` span 替换为真实链接，例如：

```html
<a href="files/paper.pdf">PDF</a> · <a href="https://github.com/JustinJin04/REPOSITORY">Code</a>
```

如果已有 PDF 简历，将它保存为 `files/CV.pdf`，并把首页中的 `cv.html` 链接改为 `files/CV.pdf`。

## 发布到 GitHub Pages

1. 使用 GitHub 账号 `JustinJin04` 创建名为 `JustinJin04.github.io` 的仓库。
2. 将本目录中的内容上传到仓库根目录，确保 `index.html` 直接位于根目录，保留 `.nojekyll`。
3. 在仓库 Settings → Pages 中选择从分支部署，并选择 `main` 分支的根目录 `/ (root)`。
4. GitHub 完成部署后，访问 https://JustinJin04.github.io/ 。

此模板只在本地创建，没有自动上传或发布。发布前替换占位内容、核对链接、更新页脚年份。不要在公开仓库中上传私人文件。

## 风格说明

仅参考原站布局和视觉风格，未复制原作者的照片、论文、个人经历或主题代码。使用系统字体，无外部字体或脚本请求；GitHub 链接对应你指定的用户名。
