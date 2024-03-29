'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]



try{
    data.forEach(blockObj => {
        const block = document.createElement(blockObj.tag);
        if(!blockObj.id) throw new SyntaxError(`В даннных под номером ${i + 1} нет id`);
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch(e){
    if(e.name === 'SyntaxError'){
        console.log(e.message)
    } else throw e;
}



