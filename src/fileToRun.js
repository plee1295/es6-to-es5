// https://github.com/babel/babel/issues/8121
// Watch this issue above. Would like async-to-promise and not async-to-generator. 

// function identifyVisitor () {
//   window.LOQ = window.LOQ || []
//   window.LOQ.push(['ready', async function (LO) {
//     await LO.$internal.ready('visitor')
//     LO.visitor.identify({ email: 'test@example.com' })
//   }])
// }