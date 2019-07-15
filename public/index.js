window.onload = function () {
    loadPicThumbAsync();
};


function loadPicBoddy(fileJson) {
    for (let i = 0; i < fileJson.length; i++) {
        const name = fileJson[i]["name"];
        const base64 = fileJson[i]["base64"];
        const picThumb = fileJson[i]["thumbnailUrl"];
        const picture = isEmpty(base64) ? picThumb : "data:image/png;base64," + base64;
        alert(picture)
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