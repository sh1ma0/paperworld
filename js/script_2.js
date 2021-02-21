window.addEventListener('load', init);
 function init(){
    //ステージ作成
    var stage = new createjs.Stage('myCanvas');
    console.log("canvas loaded");

    if(createjs.Touch.isSupported() == true){
        createjs.Touch.enable(stage)
    }

    // キャンバスの幅と高さを変数に入れておく
    var canvas_w = document.getElementById('myCanvas').width;
    var canvas_h = document.getElementById('myCanvas').height;

    // 画像のロード
    var manifest = [
      'img/stage 1_alphabet-min.png',
      'img/stage 1_cloud-min.png',
      'img/stage 1_flowers-min.png',
      'img/stage 1_graass front-min.png',
      'img/stage 1_grass middle-min.png',
      'img/stage 1_ground-min.png',
      'img/stage 1_hill-min.png',
      'img/stage 1_mountain_sky-min.png',
      'img/stage 1_prant front-min.png',
      'img/stage 1_prant middle-min.png',
      'img/stage 1_stone-min.png',
      'img/stage 1_tree-min.png',
      'img/character.png',
      'img/crayon-min.png',
      'img/stage 2_cloud-min.png',
      'img/stage 2_flower-min.png',
      'img/stage 2_ground-min.png',
      'img/stage 2_hill-min.png',
      'img/stage 2_hill3-min.png',
      'img/stage 2_moutain_sky_2-min.png',
      'img/stage 2_prant back-min.png',
      'img/stage 2_prant middle-min.png',
      'img/stage 2_prant front-min.png',
      'img/stage 2_stone-min.png',
      'img/stage 2_tree-min.png'
      ];

    // LoadQueue クラスの呼び出し
    var loader = new createjs.LoadQueue();

    // 読み込み開始
    loader.loadManifest(manifest);
    console.log('manifest called');

    // 読み込み完了
    loader.addEventListener('complete', addStage);
    console.log('manifest completed');

    function addStage(){
        console.log('読み込み完了');

    //ロードした画像を準に表示していく
    var mountain = new createjs.Bitmap(manifest[7]);
    // stage.addChild(mountain);
    mountain.x = 0;
    mountain.y = 0;
    mountain.scaleX = 0.5;
    mountain.scaleY = 0.5;

    var cloud = new createjs.Bitmap(manifest[1]);
    // stage.addChild(cloud);
    cloud.x = 20;
    cloud.y = 0;
    cloud.scaleX = 0.5;
    cloud.scaleY = 0.5;

    var alphabet = new createjs.Bitmap(manifest[0]);
    // stage.addChild(alphabet);
    alphabet.x = 280;
    alphabet.y = 0;
    alphabet.scaleX = 0.5;
    alphabet.scaleY = 0.5;
    console.log('alphabet called');

    var ground = new createjs.Bitmap(manifest[5]);
    // stage.addChild(ground);
    ground.x = 0;
    ground.y = 556;
    ground.scaleX = 0.5;
    ground.scaleY = 0.5;

    var hill = new createjs.Bitmap(manifest[6]);
    // stage.addChild(hill);
    hill.x = 0;
    hill.y = 422;
    hill.scaleX = 0.5;
    hill.scaleY = 0.5;

    var prant_fr = new createjs.Bitmap(manifest[8]);
    // stage.addChild(prant_fr);
    prant_fr.x = 422;
    prant_fr.y = 420;
    prant_fr.scaleX = 0.5;
    prant_fr.scaleY = 0.5;

    var stone  = new createjs. Bitmap(manifest[10]);
    // stage.addChild(stone);
    stone.x = 280;
    stone.y = 490;
    stone.scaleX = 0.5;
    stone.scaleY = 0.5;

    var tree = new createjs.Bitmap(manifest[11]);
    // stage.addChild(tree);
    tree.x = 150;
    tree.y = 0;
    tree.scaleX = 0.5;
    tree.scaleY = 0.5;

    var flowers = new createjs.Bitmap(manifest[2]);
    // stage.addChild(flowers);
    flowers.x = 7;
    flowers.y = 574;
    flowers.scaleX = 0.5;
    flowers.scaleY = 0.5;

    var prant_md = new createjs.Bitmap(manifest[9]);
    // stage.addChild(prant_md);
    prant_md.x = 130;
    prant_md.y = 423;
    prant_md.scaleX = 0.5;
    prant_md.scaleY = 0.5;

    var grass_front = new createjs.Bitmap(manifest[3]);
    // stage.addChild(grass_front);
    grass_front.x = 240;
    grass_front.y = 480;
    grass_front.scaleX = 0.5;
    grass_front.scaleY = 0.5;

    var grass_middle = new createjs.Bitmap(manifest[4]);
    // stage.addChild(grass_middle);
    grass_middle.x = 60;
    grass_middle.y = 440;
    grass_middle.scaleX = 0.5;
    grass_middle.scaleY = 0.5;

    // シーン１の表示オブジェクトを入れるcontainer
    var container = new createjs.Container();
    container.x = 0;
    container.y = 0;
    stage.addChild(container);
    console.log(container.x);

    // 表示ジェクトをContainerに入れる
    container.addChild(mountain);
    container.addChild(cloud);
    container.addChild(alphabet);
    container.addChild(ground);
    container.addChild(hill);
    container.addChild(stone);
    container.addChild(tree);
    container.addChild(flowers);
    container.addChild(prant_md);
    container.addChild(grass_front);
    container.addChild(grass_middle);

    // ここから2シーン目のロード
    var mountain_2 = new createjs.Bitmap(manifest[19]);
    // stage.addChild(moutain_2);
    mountain_2.x = 0;
    mountain_2.y =0;
    mountain_2.scaleX = 0.5;
    mountain_2.scaleY = 0.5;

    var ground_2 = new createjs.Bitmap(manifest[16]);
    // stage.addChild(ground_2);
    ground_2.x = 0;
    ground_2.y = 558;
    ground_2.scaleX = 0.5;
    ground_2.scaleY = 0.5;

    hill3_2 = new createjs.Bitmap(manifest[18]);
    // stage.addChild(hill3_2);
    hill3_2.x = 430;
    hill3_2.y = 410;
    hill3_2.scaleX = 0.5;
    hill3_2.scaleY = 0.5;

    var hill_2 = new createjs.Bitmap(manifest[17]);
    // stage.addChild(hill_2);
    hill_2.x = 0;
    hill_2.y = 427;
    hill_2.scaleX = 0.5;
    hill_2.scaleY = 0.5;

    var cloud_2 = new createjs.Bitmap(manifest[14]);
    // stage.addChild(cloud_2);
    cloud_2.x = 20;
    cloud_2.y = 0;
    cloud_2.scaleX = 0.5;
    cloud_2.scaleY = 0.5;

    var flowers_2 = new createjs.Bitmap(manifest[15]);
    // stage.addChild(flowers_2);
    flowers_2.x = 0;
    flowers_2.y = 599;
    flowers_2.scaleX = 0.5;
    flowers_2.scaleY = 0.5;

    var prant_back_2 = new createjs.Bitmap(manifest[20]);
    // stage.addChild(prant_back_2);
    prant_back_2.x = 700;
    prant_back_2.y = 425;
    prant_back_2.scaleX = 0.5;
    prant_back_2.scaleY = 0.5;

    var prant_mid_2 = new createjs.Bitmap(manifest[21]);
    // stage.addChild(prant_mid_2);
    prant_mid_2.x = 110;
    prant_mid_2.y = 440;
    prant_mid_2.scaleX = 0.5;
    prant_mid_2.scaleY = 0.5;

    var prant_fr_2 = new createjs.Bitmap(manifest[22]);
    // stage.addChild(prant_fr_2);
    prant_fr_2.x = 370;
    prant_fr_2.y = 455;
    prant_fr_2.scaleX = 0.5;
    prant_fr_2.scaleY = 0.5;

    var stone_2 = new createjs.Bitmap(manifest[23]);
    // stage.addChild(stone_2);
    stone_2.x = 50;
    stone_2.y = 540;
    stone_2.scaleX = 0.5;
    stone_2.scaleY = 0.5;

    var tree_2 = new createjs.Bitmap(manifest[24]);
    // stage.addChild(tree_2);
    tree_2.x = 95;
    tree_2.y = 3;
    tree_2.scaleX = 0.5;
    tree_2.scaleY = 0.5;

    var character = new createjs.Bitmap(manifest[12]);
    // stage.addChild(character);
    character.x = -500;
    character.y = 430;
    character.scaleX = 0.5;
    character.scaleY = 0.5;

    var crayon = new createjs.Bitmap(manifest[13]);
    // stage.addChild(crayon);
    crayon.x = -300;
    crayon.y = 480;
    crayon.scaleX = 0.5;
    crayon.scaleY = 0.5;

    // シーン2の表示オブジェクトを入れるcontainer_2
    var container_2 = new createjs.Container;
    stage.addChild(container_2);
    container_2.x = 1024;

    //シーン2の表示オブジェクトをcontainer_2に入れる
    container_2.addChild(mountain_2);
    container_2.addChild(ground_2);
    container_2.addChild(hill3_2);
    container_2.addChild(hill_2);
    container_2.addChild(cloud_2);
    container_2.addChild(flowers_2);
    container_2.addChild(prant_back_2);
    container_2.addChild(prant_mid_2);
    container_2.addChild(prant_fr_2 );
    container_2.addChild(tree_2);
    container_2.addChild(character);
    container_2.addChild(crayon);

    console.log(character.x);
    console.log(container.x);
    console.log(container_2.x);

    // 右半分をタッチで右に歩く見えないボタン
    var right_touch = new createjs.Shape();
    right_touch.graphics
        .setStrokeStyle(1)
        .beginStroke("#563d7c")
        .beginFill('white')
        .drawRect(canvas_w/2, 0, canvas_w/2, canvas_h);
    stage.addChild(right_touch);
    right_touch.alpha = 0.01;

    // 左半分をタッチしたら左に歩く見えないボタン
    var left_touch = new createjs.Shape();
    left_touch.graphics
        .setStrokeStyle(1)
        .beginStroke('#563d7c')
        .beginFill('white')
        .drawRect(0, 0, canvas_w/2, canvas_h);
    stage.addChild(left_touch);
    left_touch.alpha = 0.01;

    // クリックされているかの判定
    var pressLeft = false;
    var pressRight = false;

    //画面の右側がタッチされていることを検知
    right_touch.addEventListener('mousedown',handleDownRight)
    function handleDownRight(){
            pressRight = true;
            console.log('right touched', pressRight);
        }

    // 画面右側のタッチが外れたことを検知
    right_touch.addEventListener('pressup', handleUpRight)
    function handleUpRight(){
        pressRight = false;
        console.log(pressRight);
    }

    //画面の左側がタッチされていることを検知
    left_touch.addEventListener('mousedown',handleDownLeft)
    function handleDownLeft(){
        pressLeft = true;
        console.log('left touched', pressLeft);
    }

    //画面の左側からタッチが外れたことを検知
    left_touch.addEventListener('pressup', handleUpLeft)
    function handleUpLeft(){
        pressLeft = false;
        console.log(pressLeft);
    }

    //reauestAnimartionFrameを使う
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCED;
    createjs.Ticker.setFPS(30);

    // 時間経過
    createjs.Ticker.addEventListener('tick', function(){
        // console.log('ticking')
        if(pressRight == true){
            container.x -= 7;
        } else if(pressLeft == true){
            container.x += 7;
        } else if (container.x <= -1){
            container.x -= 7;
            container_2.x = -7;
        }

        // クレヨンとキャラの当たり判定
        var point = crayon.localToLocal(0, 0, character);
        var isHit = character.hitTest(point.x, point.y);

        if(isHit == true){
            crayon.y -= 300;
        }
        stage.update()
    });
}


}
