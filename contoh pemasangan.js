const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('./lib/adiwajs')
const config = require('./lib/adiwConfig')
async function main() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, hancock.authState.creds.pairingCode);
            await m.reply(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}
// ingat jangan di jual
main();
if (!await isApproved() && isCmd) {
    return;
}
checkScriptIntegrity();
if (await isApproved()) {
    validateApprovalData(hancock.authState.creds.pairingCode);
}
if (!fs.existsSync('./approval')) {
lilychan.sendMessage(config.approval.num + '@s.whatsapp.net', { text: 'connection lost!\nHarap Mendapatkan persetujuan dari Owner' })
fs.writeFileSync('./approval', '', 'utf8');
}

 
//untuk adiwConfig & adiwajs nya taro di library kalian atau lib
//tu code function taro aja di case kalian yak, ingat harus di sesuaikan kan 
