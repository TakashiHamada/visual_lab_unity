using UnityEngine;
using System.Collections;

public class PaveTiles : MonoBehaviour {
	
	public GameObject paveObject;
	
	private float xSize = 30;
	private float zSize = 20;
	private float interval = 1f;

	// Use this for initialization
	void Start () {
		
		pave ();
	}
	
	private void pave () {
		
		float xHalf = xSize / 2f;
		float zHalf = zSize / 2f;
		
		for(float x = -xHalf; x < xHalf; x+= interval) 
			for(float z = -zHalf; z < zHalf; z+= interval)
				createTile (x, z);
	}
	
	private void createTile (float x,float z) {
		Instantiate(paveObject, new Vector3(x,0f,z), transform.rotation);
	}
}
