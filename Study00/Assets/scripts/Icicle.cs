using UnityEngine;
using System.Collections;

public class Icicle : MonoBehaviour {

	// Use this for initialization
	void Start () {
		float length = Random.Range(0f,6f);
		transform.localScale = new Vector3(1f,length,1f);
		transform.position += new Vector3(0f, -length / 2, 0f);
	}
}
