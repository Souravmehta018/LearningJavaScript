const inset = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    inset.innerHTML = `
        <div class= 'color'>
            <table>
            <tr>
            <td>keyCode</td>
            <td>${e.keyCode}</td>
            </tr>
            <tr>
            <td>key</td>
            <td>${e.key}</td>
            </tr>
            <tr>
            <td>code</td>
            <td>${e.code}</td>
            </tr>
            </table>
        </div>

    `
});