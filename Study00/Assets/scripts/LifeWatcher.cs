using UnityEngine;
using System.Collections;

public class LifeWatcher : MonoBehaviour {

	void OnBecameInvisible () {
		Destroy(this.gameObject);
	}
}
