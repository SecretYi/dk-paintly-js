//定义blcok样式
/*
    div .father
        div .children
            div.prevsibling
                span.title
                    div.detail

*/
var body = document.querySelector('body .body');
var div_father = document.createElement('div')
    div_father.className = 'father';

var div_children = document.createElement('a');
    div_children . className='father_children';
    div_children . innerHTML = '了解更多&gt&gt'

var div_nextsibling = document.createElement('div');
    div_nextsibling . className = 'nextsibling';

var div_prevsibling = document.createElement('div');
    div_prevsibling.className='prevsibling';

var div_nextsibling_top = document.createElement('div')
    div_nextsibling_top.className = 'nextsibling-top'
    
var div_nextsibling_bottom = document.createElement('div')
    div_nextsibling_bottom.className = 'nextsibling-bottom';

var span_title = document.createElement('span');
    span_title . className = 'title';

var div_detail = document.createElement('div');
    div_detail.className = 'detail';

var div_moredetail = document.createElement('div');
    div_moredetail . className = 'moredetail';

var div_logo = document.createElement('div');
    div_logo.className='logo';

    //整个外包裹
    //father的svg缩略
    div_father.appendChild(div_prevsibling);
    //svg缩影下角商品
    div_prevsibling.appendChild(div_logo);
    //father的deatil title button等
    div_father.appendChild(div_nextsibling);
    //小老弟的head（top）
    div_nextsibling.appendChild(div_nextsibling_top);
    //小老弟的title
    div_nextsibling.appendChild(span_title);
    //小老弟的detail
    div_nextsibling.appendChild(div_detail);
    //小老弟的foot (bottom)
    div_nextsibling.appendChild(div_nextsibling_bottom);
    div_nextsibling.appendChild(div_children);
    //将div_father插入语义body中(后续用于枚举)
    // div_father.appendChild(div_children)
    
    //拟接口
    var picInfo = 
    {
        big : '/assets/1.png',
        logo : '/assets/2.png',
        topImg : '/assets/line1@3x.png',
        bottomImg : '/assets/line2@3x.png',
        title : '故宫口红·碧玺色',
        detail : '温柔百搭,甜蜜满溢<br>水样双唇,甜蜜出击'
    }
    //

        // for(var i=0;i<=6;i+=1){
            // div_prevsibling.style.backgroundImage=`url(${fuck.big})`
            // div_logo.style.backgroundImage=`url(${fuck.logo})`
            // div_nextsibling_top.style.backgroundImage=`url(${fuck.topImg})`
            // span_title.innerHTML=fuck.title
            // div_detail.innerHTML=fuck.detail
            // div_nextsibling_bottom.style.backgroundImage=`url(${fuck.bottomImg})` 
            // body.appendChild(div_father)
            // for(var i=0;i<=5;i+=1){
            // }
        // }
    var str='';
    var picJson='';
    