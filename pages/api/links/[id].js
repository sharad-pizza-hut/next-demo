import { links } from '../../../data'

export default ({ query: { id } }, res) => {
	const filtered = links.filter(p => p.id === id)

	// Link with id exists
	if (filtered.length > 0) {
		res.status(200).json(filtered[0])
	} else {
		res.status(404).json({ message: `Link with id: ${id} not found.` })
	}
}
