using UnityEngine;
using System.Collections;

public class Flash : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
		if(Input.GetMouseButtonDown(0))
			FlashAllEllemnts();
	}
	
	private void FlashAllEllemnts () {
		GameObject[] ellemnts = GameObject.FindGameObjectsWithTag("Player");
		foreach(GameObject ellemnt in ellemnts) {
			float rand = Random.Range(0f,10f);
			if(rand > 9f) ellemnt.SendMessage("StrongerSkin");
		}
	}
}
