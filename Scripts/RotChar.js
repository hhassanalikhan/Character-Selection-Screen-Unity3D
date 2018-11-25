#pragma strict

public var speed : float = 10f;
public var player : GameObject;
public var es : Event;
public var val:String;
public var im:UnityEngine.UI.RawImage;
public var p1 : GameObject;
public var p2 : GameObject;
public var p3 : GameObject;
public var p4 : GameObject;
public var p5 : GameObject;
public var p6 : GameObject;
public var p7 : GameObject;


function Start () {

player = p1;
}

function p1press () {
player.active = false;
p1.active = true;
player = p1;
}
function p2press () {
player.active = false;
p2.active = true;
player = p2;
}
function p3press () {
player.active = false;
p3.active = true;
player = p3;
}
function p4press () {
player.active = false;
p4.active = true;
player = p4;
}
function p5press () {
player.active = false;
p5.active = true;
player = p5;
}
function p6press () {
player.active = false;
p6.active = true;
player = p6;
}
function p7press () {
player.active = false;
p7.active = true;
player = p7;
}


function Update () {

 if(p4.active == false)
 		player.transform.Rotate(Vector3.up, speed * Time.deltaTime);
// Debug.Log("Int "+val);
}

