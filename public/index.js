window.onload = function () {
    loadPicBoddy(null);
};

function loadPicBoddy(fileJson) {
    picJson = `{
        "title":"西游记",
        "description":"唯美复古涂色集合",
        "type_1":"精品主打",
        "official":"Paint.ly 官方出品",
        "type_2":"VIP",
        "info":"更新到第10页 共32页 46万次涂色",
        "id":"topic_xyj",
        "thumbnail":"http://n.sinaimg.cn/front/20170727/IdzT-fyinvwu2697829.jpg",
        "additional":{
            "thumbnail":"https://img.3dmgame.com/uploads/images/news/20181227/1545884855_929917.jpg",
            "title":"新手福利",
            "type":"免费",
            "sequence":"壹",
            "name":"花果山"
        },
        "pic_type":"更新",
        "pic_info":"每周二，四，六更新，会员免费 >",
        "pic":
        [
            {
                "id": 100001,
                "name": "01000039",
                "thumbnailUrl": "http://pbncdn.tapque.com/paintbynumber/01000039.png",
                "contentUrl": "http://pbncdn.tapque.com/paintbynumber/01000039.svg",
                "updateTime": "2019-04-13 01:26:08",
                "activeTime": "2018-12-19 16:00:00",
                "saleType": 0,
                "category": null,
                "sequence": 1,
                "zone": null,
                "base64":"",
                "chapter":"大闹天宫",
                "number":"十三"
              },
              {
                "id": 100002,
                "name": "01000036",
                "thumbnailUrl": "http://pbncdn.tapque.com/paintbynumber/01000036.png",
                "contentUrl": "http://pbncdn.tapque.com/paintbynumber/01000036.svg",
                "updateTime": "2019-04-13 01:26:08",
                "activeTime": "2018-12-19 16:00:00",
                "saleType": 0,
                "category": null,
                "sequence": 2,
                "base64":"",
                "zone": null,
                "chapter":"蟠桃园",
                "number":"十二"
              },
              {
                "id": 100003,
                "name": "01000040",
                "thumbnailUrl": "http://pbncdn.tapque.com/paintbynumber/01000040.png",
                "contentUrl": "http://pbncdn.tapque.com/paintbynumber/01000040.svg",
                "updateTime": "2019-04-13 01:26:08",
                "activeTime": "2018-12-19 16:00:00",
                "saleType": 1,
                "category": null,
                "sequence": 3,
                "base64":"",
                "zone": null,
                "chapter":"东海取宝",
                "number":"十一"
              }
        ]
    }`;
    alert(picJson)
    fileJson = (JSON.parse(picJson))["pic"]
    alert(fileJson.length)
    for (let i = 0; i < fileJson.length; i++) {
        const name = fileJson[i]["name"];
        const base64 = fileJson[i]["base64"];
        const picThumb = fileJson[i]["thumbnailUrl"];
        var picture = isEmpty(base64) ? picThumb : "data:image/png;base64," + base64;
        picture = "https://img.3dmgame.com/uploads/images/news/20181227/1545884855_929917.jpg"
        str += (`
    <div class="father">
        <div id='${name}' onclick="checkPic('${name}')" class=${i%2==1?"prevsibling":"doubleprevsibling"}">
            <img src="${picture}" class=${i%2==1?"prevsibling":"doubleprevsibling"}></img>
            <div class=${i%2==1?"logo":"doublelogo"} style="background-image: url(${picInfo.logo})"></div>
        </div>
        <div class="${i%2==1?"nextsibling":"doublenextsibling"}">
            <div class="nextsibling-top" style="background-image: url(${picInfo.topImg})"></div>
            <span class="title">${picInfo.title}</span>
            <div class="detail">${picInfo.detail}</div>
            <div class="nextsibling-bottom" style="background-image: url(${picInfo.bottomImg})"></div>
            <div class="${i%2==1?"father_children":"doublechildren"}">了解更多&gt&gt</div>
        </div>
    </div>
    `);
    }
    body.innerHTML = str;
}



function loadPicThumbAsync() {
    bridge.call('dk.loadPicThumbAsync', null, function (result) {
        var picJson = JSON.parse(result);
        loadPicBoddy(picJson["pic"])
    })
}

function loadPicThumbSync() {
    var picObject = {
        'version': 1
    };
    var picNameArray = [];
    picNameArray.push("aa");
    picNameArray.push("bb");
    picNameArray.push("cc");
    picObject['pic'] = picNameArray;
    bridge.call('dk.loadPicThumbSync', JSON.stringify(picObject))
}

bridge.register('refreshPic', function (fileName) {
    //刷新模板
    alert(fileName)
})

function checkPic(name) {
    bridge.call('dk.checkPic', name)
}