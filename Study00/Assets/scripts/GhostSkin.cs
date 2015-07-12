using UnityEngine;
using System.Collections;

public class GhostSkin : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GetComponent<Renderer>().material.color = new Color(1f,1f,1f,1f);
	}
	
	// Update is called once per frame
	void Update () {
		WeakenSkin ();
	}
	
	void OnCollisionStay () {
		StrongerSkin ();
	}
	
	private void StrongerSkin() {
		if(GetComponent<Renderer>().material.color.a > 1f) return;
		GetComponent<Renderer>().material.color = new Color(1f,1f,1f,1f);
	}
	
	private void WeakenSkin() {
		if(GetComponent<Renderer>().material.color.a < 0f) return;
		GetComponent<Renderer>().material.color -= new Color(0f,0f,0f,0.01f);
	}
}
