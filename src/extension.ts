import vscode from 'vscode'
import path from 'path'

export const getUmiHTMLContent = (umiCss: any, umiJs: any): string => {
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <title>umi</title>
        <link rel="stylesheet" href="${umiCss}" />
        <script>
          //! umi version: 3.3.5
        </script>
      </head>
      <body>
        <div id="root"></div>
        <script src="${umiJs}"></script>
      </body>
    </html>
  `
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension kdesign-vscode-plugin.start is now active!')

  const disposable = vscode.commands.registerCommand('kdesign-vscode-plugin.start', () => {
    vscode.window.showInformationMessage('Hello World from kdesign-vscode-plugin.start')

    const currentPanel = vscode.window.createWebviewPanel('kdesign-vscode-plugin', 'kdesign-vscode-plugin', vscode.ViewColumn.One, {
      retainContextWhenHidden: true,
      enableScripts: true,
    })

    const getDiskPath = (fileName: string) => {
      return currentPanel.webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath, 'web', 'dist', fileName)),
      )
    }

    const umiCss = getDiskPath('umi.css')
    const umiJs = getDiskPath('umi.js')

    currentPanel.webview.html = getUmiHTMLContent(umiCss, umiJs)

    const updateWebview = () => {
      currentPanel.webview.html = getUmiHTMLContent(umiCss, umiJs)
    }

    updateWebview()
    const interval = setInterval(updateWebview, 1000)

    currentPanel.onDidDispose(
      () => {
        clearInterval(interval)
      },
      null,
      context.subscriptions,
    )
  })

  context.subscriptions.push(disposable)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
