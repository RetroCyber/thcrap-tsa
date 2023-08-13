{
	"breakpoints": {
		"file_size": {
			"addr": "RxC8319"
		},
		"file_load": {
			"addr": "RxC8357"
		},
		"file_loaded": {
			"addr": "Rx146BD1"
		},
		"dict_translate": {
			"addr": "Rx149D28",
			"cavesize": 6,
			"str": "[esp+0x4]",
		}
	},
	"binhacks": {
		"sprintf_th19_l": {
			"addr": "RxBFC12",
			"code": "ff7524f30f118560ffffffff7504e8[strings_vsprintf]898578ffffff90909090908b4e2083c40c",
		},
		"sprintf_th19_r": {
			"addr": "RxBFA82",
			"code": "ff7520f30f1185e0faffffff7504e8[strings_vsprintf]8985fcfaffff90909090908b4f2083c40c"
		},
		"sprintf_th19_c": {
			"addr": "RxBF8E2",
			"code": "ff7520f30f1185e0faffffff7504e8[strings_vsprintf]8985f4faffff90909090908b4e2083c40c"
		},
		"sprintf_rep": {
			"addr": [
				"RxBFCC3",
				"RxBFCD4",
				
				"RxBF944",
				"RxBFA00",
				"RxBFA11",
				
				"RxBFAE4",
				"RxBFB90",
				"RxBFBA1",
			]
		},
	},
	"tsa_font_block": [
		"Rx2078EC",
		"Rx2090E0",
		"Rx2090E4",
		"Rx2090E8",
		"Rx2090EC",
		"Rx2090F0",
		"Rx2090F4",
		"Rx2090F8",
		"Rx2078CC",
		"Rx20084C",
		"Rx2090FC",
		"Rx209100",
		"Rx209104",
		"Rx209108",
	],
	"init_stages": [
		{
			"binhacks": {
				"steamstub_crack": {
					"title": "Crack SteamStub by disabling its integrity check",
					"addr": "Rx231413",
					"code": "eb",
					"expected": "74"
				}
			},
			"breakpoints": {
				"init_next_stage#1": {
					"addr": "Rx232036",
					"module": "eax",
					"cavesize": 6
				},
				"init_next_stage#game": {
					"addr": "Rx230333",
					"cavesize": 5
				}
			}
		},
		{
			"The addresses here are relative to": "SteamDRMP.dll",
			"binhacks": {
				"steamdrm_crack": {
					"title": "Crack SteamDRM: Remove all communication with the Steam client",
					"addr": "Rx3e70",
					"code": "90909090909090909090 b030 88450b e9"
				}
			}
		}
	]
}