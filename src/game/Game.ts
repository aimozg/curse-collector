/*
 * Created by aimozg on 04.03.2023.
 */

import {GameState} from "./GameState";
import {ScreenManager} from "./ui/ScreenManager";
import {InputManager} from "./ui/InputManager";
import {GameController} from "./GameController";
import {XorWowRandom} from "../utils/math/XorWowRandom";
import {Random} from "../utils/math/Random";
import {EntityLoader} from "./ecs/EntityLoader";
import {Level} from "./core/Level";
import {Player} from "./core/Player";
import {Item} from "./core/Item";
import {Monster} from "./core/Monster";
import {WeaponLib} from "./data/WeaponLib";
import {LevelExit} from "./objects/LevelExit";
import {MonsterLib} from "./data/MonsterLib";
import {MonsterAI} from "./combat/MonsterAI";


export namespace Game {

	export const state = GameState;
	export let rng = state.rng;
	export let maprng = state.maprng;
	export let fxrng:Random = XorWowRandom.create();
	export let screenManager: ScreenManager;
	export let inputManager: InputManager;
	export const gameController = GameController;
	export const entityLoader = new EntityLoader();

	export async function start() {
		entityLoader.registerClassLoader(Item.Loader);
		Item.Loader.registerBlueprints(Object.values(WeaponLib));
		entityLoader.registerClassLoader(Level.Loader);
		entityLoader.registerClassLoader(LevelExit.Loader);
		entityLoader.registerClassLoader(Monster.Loader);
		Monster.Loader.registerBlueprints(Object.values(MonsterLib));
		entityLoader.registerClassLoader(MonsterAI.Loader);
		entityLoader.registerClassLoader(Player.Loader);

		// TODO main menu
		screenManager = new ScreenManager();
		inputManager = new InputManager();
		await GameController.setup();
		await screenManager.setup();
		await inputManager.setup();

		screenManager.beforeRender = ()=>{
			GameController.update();
			GameController.checkVisibility();
		}

		GameState.resetGame();
		GameController.newGame();

		screenManager.resizeCanvas();
	}


}
