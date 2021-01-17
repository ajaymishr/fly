var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e59d5f52-6bba-4128-9bd2-2dfc9984cdf8","089d9016-6893-43ca-ae72-b9f5f2098607","2bc6bbbe-bd7a-4345-8626-1b150eda5f46","bff55f49-a093-4f66-a60b-0fbc9a74fdac","ddcd3ebe-2e7b-45cf-8239-4892a033a4d7","44719a59-4a8b-424e-b4d0-9ad9a914bc1a","031ed27d-330b-4d7a-8dcb-c3bb8f79848a","009518f9-3684-4701-bdc2-9255f7ad7182","124c127b-9237-4c00-8d87-01a02694a11b","671b1ec1-54fa-4fc3-ac61-ec832c0080bd","764d929c-b232-475c-af73-39ccd7c1fa3a"],"propsByKey":{"e59d5f52-6bba-4128-9bd2-2dfc9984cdf8":{"name":"apple","sourceUrl":"assets/api/v1/animation-library/gamelab/H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/H1iDG5ShlbYDnc1J6HHfFkAbkbQRijGg/category_food/apple.png"},"089d9016-6893-43ca-ae72-b9f5f2098607":{"name":"fly","sourceUrl":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png","frameSize":{"x":63,"y":50},"frameCount":2,"looping":true,"frameDelay":2,"version":"N602_cNy0LoPLXkwaUfCp2XJWPo86SUw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":50},"rootRelativePath":"assets/api/v1/animation-library/gamelab/N602_cNy0LoPLXkwaUfCp2XJWPo86SUw/category_animals/bee.png"},"2bc6bbbe-bd7a-4345-8626-1b150eda5f46":{"name":"right","sourceUrl":"assets/api/v1/animation-library/gamelab/PmcW8QQkaj55L9GYk2lxYRL2ogRAy_jI/category_robots/gray_robot_4.png","frameSize":{"x":486,"y":831},"frameCount":1,"looping":true,"frameDelay":2,"version":"PmcW8QQkaj55L9GYk2lxYRL2ogRAy_jI","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":486,"y":831},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PmcW8QQkaj55L9GYk2lxYRL2ogRAy_jI/category_robots/gray_robot_4.png"},"bff55f49-a093-4f66-a60b-0fbc9a74fdac":{"name":"left","sourceUrl":"assets/api/v1/animation-library/gamelab/eCyBKxvdDAqCzNrX6zcZquj_47XK0SfZ/category_robots/gray_robot_5.png","frameSize":{"x":493,"y":836},"frameCount":1,"looping":true,"frameDelay":2,"version":"eCyBKxvdDAqCzNrX6zcZquj_47XK0SfZ","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":493,"y":836},"rootRelativePath":"assets/api/v1/animation-library/gamelab/eCyBKxvdDAqCzNrX6zcZquj_47XK0SfZ/category_robots/gray_robot_5.png"},"ddcd3ebe-2e7b-45cf-8239-4892a033a4d7":{"name":"up","sourceUrl":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png","frameSize":{"x":218,"y":128},"frameCount":8,"looping":true,"frameDelay":2,"version":"8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1744,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8vku5_RNEZvo3XZVdvh4Olm1LbbiMIBb/category_fantasy/wing_bot.png"},"44719a59-4a8b-424e-b4d0-9ad9a914bc1a":{"name":"down","sourceUrl":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png","frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":2,"version":"tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png"},"031ed27d-330b-4d7a-8dcb-c3bb8f79848a":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"},"009518f9-3684-4701-bdc2-9255f7ad7182":{"name":"darrow","sourceUrl":"assets/api/v1/animation-library/gamelab/BTG1UrrE9_K8G5F1R057hwCexGLA2v.B/category_icons/down_green_result.png","frameSize":{"x":381,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"BTG1UrrE9_K8G5F1R057hwCexGLA2v.B","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BTG1UrrE9_K8G5F1R057hwCexGLA2v.B/category_icons/down_green_result.png"},"124c127b-9237-4c00-8d87-01a02694a11b":{"name":"uarrow","sourceUrl":"assets/api/v1/animation-library/gamelab/jIMWklYQow2TW.JOooqILDXyl0Zewven/category_icons/up_green_result.png","frameSize":{"x":380,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"jIMWklYQow2TW.JOooqILDXyl0Zewven","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jIMWklYQow2TW.JOooqILDXyl0Zewven/category_icons/up_green_result.png"},"671b1ec1-54fa-4fc3-ac61-ec832c0080bd":{"name":"larrow","sourceUrl":"assets/api/v1/animation-library/gamelab/HhUadU1BDYq5sKr318oJmdEkfFSpJkCV/category_icons/left_green_result.png","frameSize":{"x":398,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"HhUadU1BDYq5sKr318oJmdEkfFSpJkCV","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HhUadU1BDYq5sKr318oJmdEkfFSpJkCV/category_icons/left_green_result.png"},"764d929c-b232-475c-af73-39ccd7c1fa3a":{"name":"rarrow","sourceUrl":"assets/api/v1/animation-library/gamelab/XhVGUJpcV0OQl.pu12_qH_j9s4cafCKB/category_icons/right_green_result.png","frameSize":{"x":398,"y":381},"frameCount":1,"looping":true,"frameDelay":2,"version":"XhVGUJpcV0OQl.pu12_qH_j9s4cafCKB","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":381},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XhVGUJpcV0OQl.pu12_qH_j9s4cafCKB/category_icons/right_green_result.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

showMobileControls(false, false, false, true);
var bg=createSprite(200,200,400,400);
var leftc=createSprite(20,200,20,20);
var rightc=createSprite(380,200,20,20);
var upc=createSprite(200,20,20,20);
var downc=createSprite(200,380,20,20);
leftc.setAnimation("larrow");
leftc.scale=0.08;
rightc.setAnimation("rarrow");
rightc.scale=0.08;
upc.setAnimation("uarrow");
upc.scale=0.08;
downc.setAnimation("darrow");
downc.scale=0.08;
bg.setAnimation("bg");
var snake=createSprite(200,200,15,15);
var apple=createSprite(random(5,395),random(5,395),10,10);
var wall1=createSprite(random(5,190),random(5,190),5,5);
var wall2=createSprite(random(210,395),random(210,395),5,5);
var score=0;
apple.setAnimation("apple");
apple.scale=0.4;
wall1.setAnimation("fly");
wall2.setAnimation("fly");
snake.setAnimation("up");
snake.scale=0.4;
function draw(){
  background("red");
  createEdgeSprites();
  wall1.velocityX=random(-10,10);
wall2.velocityX=random(-10,10);
wall1.velocityY=random(-10,10);
wall2.velocityY=random(-10,10);
wall1.bounceOff(edges);
wall2.bounceOff(edges);
snake.bounceOff(edges);
  drawSprites();
  fill("green")
  stroke(255)
  strokeWeight(5)
textSize(25);
text("score "+score,8,25);
if(mousePressedOver(snake)){
  snake.setAnimation("down")
}
if(mousePressedOver(leftc)){
  snake.velocityX=-3;
}
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
