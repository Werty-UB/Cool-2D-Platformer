gdjs.Lvl1Code = {};
gdjs.Lvl1Code.localVariables = [];
gdjs.Lvl1Code.idToCallbackMap = new Map();
gdjs.Lvl1Code.GDPlayerObjects1= [];
gdjs.Lvl1Code.GDPlayerObjects2= [];
gdjs.Lvl1Code.GDPlatform_9595GroundObjects1= [];
gdjs.Lvl1Code.GDPlatform_9595GroundObjects2= [];
gdjs.Lvl1Code.GDInstructionsObjects1= [];
gdjs.Lvl1Code.GDInstructionsObjects2= [];
gdjs.Lvl1Code.GDSpikesObjects1= [];
gdjs.Lvl1Code.GDSpikesObjects2= [];
gdjs.Lvl1Code.GDFinish_9595Flag_9595Lvl1Objects1= [];
gdjs.Lvl1Code.GDFinish_9595Flag_9595Lvl1Objects2= [];
gdjs.Lvl1Code.GDAw_9595manObjects1= [];
gdjs.Lvl1Code.GDAw_9595manObjects2= [];


gdjs.Lvl1Code.mapOfGDgdjs_9546Lvl1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Lvl1Code.GDPlayerObjects1});
gdjs.Lvl1Code.mapOfGDgdjs_9546Lvl1Code_9546GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Lvl1Code.GDSpikesObjects1});
gdjs.Lvl1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Lvl1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Lvl1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Lvl1Code.GDPlayerObjects1[i].setPosition(128,256);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Lvl1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Lvl1Code.GDSpikesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Lvl1Code.mapOfGDgdjs_9546Lvl1Code_9546GDPlayerObjects1Objects, gdjs.Lvl1Code.mapOfGDgdjs_9546Lvl1Code_9546GDSpikesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Lvl1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Lvl1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Lvl1Code.GDPlayerObjects1[i].setPosition(128,256);
}
}
}

}


};

gdjs.Lvl1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lvl1Code.GDPlayerObjects1.length = 0;
gdjs.Lvl1Code.GDPlayerObjects2.length = 0;
gdjs.Lvl1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Lvl1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Lvl1Code.GDInstructionsObjects1.length = 0;
gdjs.Lvl1Code.GDInstructionsObjects2.length = 0;
gdjs.Lvl1Code.GDSpikesObjects1.length = 0;
gdjs.Lvl1Code.GDSpikesObjects2.length = 0;
gdjs.Lvl1Code.GDFinish_9595Flag_9595Lvl1Objects1.length = 0;
gdjs.Lvl1Code.GDFinish_9595Flag_9595Lvl1Objects2.length = 0;
gdjs.Lvl1Code.GDAw_9595manObjects1.length = 0;
gdjs.Lvl1Code.GDAw_9595manObjects2.length = 0;

gdjs.Lvl1Code.eventsList0(runtimeScene);
gdjs.Lvl1Code.GDPlayerObjects1.length = 0;
gdjs.Lvl1Code.GDPlayerObjects2.length = 0;
gdjs.Lvl1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Lvl1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Lvl1Code.GDInstructionsObjects1.length = 0;
gdjs.Lvl1Code.GDInstructionsObjects2.length = 0;
gdjs.Lvl1Code.GDSpikesObjects1.length = 0;
gdjs.Lvl1Code.GDSpikesObjects2.length = 0;
gdjs.Lvl1Code.GDFinish_9595Flag_9595Lvl1Objects1.length = 0;
gdjs.Lvl1Code.GDFinish_9595Flag_9595Lvl1Objects2.length = 0;
gdjs.Lvl1Code.GDAw_9595manObjects1.length = 0;
gdjs.Lvl1Code.GDAw_9595manObjects2.length = 0;


return;

}

gdjs['Lvl1Code'] = gdjs.Lvl1Code;
