/*
 * Created by aimozg on 06.03.2023.
 */

import {ChunkSet} from "./ChunkMapGen";

export let dungeonChunks = new ChunkSet([{
	layout: `
	###+###
	#.....#
	#.....#
	+.....+
	#.....#
	#.....#
	###+###`
}, {
	layout: `
	###+###
	#.....#
	#.|.|.#
	+..|..+
	#.|.|.#
	#.....#
	###+###`
}, {
	layout: `
	###+###
	#.....#
	#.===.#
	+.===.+
	#.===.#
	#.....#
	###+###`
}, {
	layout: `
	_##+##_
	##...##
	#.....#
	+..|..+
	#.....#
	##...##
	_##+##_`
}, {
	layout: `
	_##+##_
	##...##
	#..=..#
	+.===.+
	#..=..#
	##...##
	_##+##_`
}, {
	layout: `
	__#:#__
	__#.#__
	###.###
	:.....:
	###.###
	__#.#__
	__#:#__`,
	type: "corridor"
}, {
	layout: `
	__##+##__
	__#...#__
	###...###
	#...|...#
	+..|||..+
	#...|...#
	###...###
	__#...#__
	__##+##__`
}, {
	layout: `
	__##*##__
	_##...##_
	##.....##
	#.......#
	*.......*
	#.......#
	##.....##
	_##...##_
	__##*##__`
}, {
	layout: `
	###
	:.:
	###`,
	type: "corridor"
}, {
	layout: `
	#####
	:...:
	#####`,
	type: "corridor"
}, {
	layout: `
	#######
	:.....:
	#######`,
	type: "corridor"
}, {
	layout: `
	###+######+###
	#............#
	#............#
	+............+
	#............#
	#............#
	###+######+###`
}, {
	layout: `
	###+######+###
	#............#
	+............+
	#............#
	########.....#
	_______#.....#
	_______#.....+
	_______#.....#
	_______###+###`
}, {
	layout: `
	#+#########+#
	#...........#
	#.|.|.|.|.|.#
	#...........#
	+...........+
	#...........#
	#.|.|.|.|.|.#
	#...........#
	#+#########+#`,
	chance: 0.5
}, {
	layout: `
	#######
	:.....:
	###.###
	__#.#__
	__#:#__`,
	type: "corridor"
}, {
	layout: `
	#######
	#.....:
	#.#####
	#.#____
	#.#____
	#.#____
	#:#____`,
	type: "corridor"
}, {
	layout: `
	#*##__
	#..##_
	##..##
	_##..#
	__##*#`,
	type: "corridor",
	chance: 0.5
}, {
	layout: `
	#######
	*.....#
	#####.#
	____#.*
	#####.#
	*.....#
	#######`,
	type: "corridor",
	chance: 0.5
}])
