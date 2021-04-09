let baseStack = [8,6,1,9,3,2,11,12];
let evenStack = []
let oddStack = [];

for(let i = 0; i < baseStack.length; i++) {
    if(baseStack[i] % 2 == 0) {
        evenStack.push(baseStack[i]);
    } else {
        oddStack.push(baseStack[i]);
    }
}

const lenStack = baseStack.length;
baseStack = [];

console.log('[EVEN_STACK]',evenStack, '\n[ODD_STACK]', oddStack, '\n[BASE_STACK]', baseStack);

for(let i = 0; i<lenStack; i++) {
    if(i % 2 != 0) {
        baseStack.push(evenStack.pop());
    } else {
        baseStack.push(oddStack.pop());
    }
}

console.log('[EVEN_STACK]',evenStack, '\n[ODD_STACK]', oddStack, '\n[BASE_STACK]', baseStack);

