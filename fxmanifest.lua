fx_version 'cerulean'
game 'gta5'

name "nakres-jsons"
description "fast json api"
author "NakreS"
version "0.0.1"

shared_scripts {
	'shared/*.lua'
}

client_scripts {
	'client/*.lua'
}

server_scripts {
	'server/*.lua'
}

ui_page 'UI/index.html'

files {
    'UI/*.**',
}
