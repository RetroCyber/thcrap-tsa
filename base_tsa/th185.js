{
	"title": "バレットフィリア達の闇市場　〜 100th Black Market",
	"latest": [
		"v1.00a"
	],
	"binhacks": {
		"sprintf_th185_esp+34": {
			"code": "f30f11442420e8[strings_vsprintf_msvcrt14]89442434"
		},
		"sprintf_th185_2": {
			"code": "897c2428f30f1144242450e8[strings_vsprintf]8944e43c"
		},
		"sprintf_rep": {
			"addr": [
				// draw_ltext
				"Rx88d2a",
				"Rx88d39",
				
				// draw_rtext
				"Rx88e01",
				"Rx88ead",
				"Rx88ebe",
				
				// draw_ctext
				"Rx88f81",
				"Rx89039",
				"Rx8904a"
			]
		}
	},
	"breakpoints": {
		"file_size": {
			"file_size": "eax",
			"file_name": "ebx",
			"cavesize": 5
		},
		"file_load": {
			"file_buffer": "edi",
			"stack_clear_size": 8,
			"cavesize": 5
		},
		"file_loaded": {
			"cavesize": 5
		}
	}
	}
}