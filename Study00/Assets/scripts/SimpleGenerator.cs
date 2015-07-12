using UnityEngine;
using System.Collections;

public class SimpleGenerator : MonoBehaviour {

	public GameObject obj;

	// Use this for initialization
	void Start () {
	
		StartCoroutine ("TimeKeeper", 0.5f);
	}
	
	private IEnumerator TimeKeeper(float time)
	{
		while(true) {
			yield return new WaitForSeconds(time);
			Instantiate(obj,transform.position,transform.rotation);
		}
	}
}
