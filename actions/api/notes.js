const Note = require('../../db/models/note')

module.exports = {
	saveNote(req, res) {
		const newNote = new Note({ title: 'zrobic zakupy', body: 'mleko, woda, jajka' })
		newNote.save().then(() => {
			console.log('notatka zapisana')
		})
	},
}
