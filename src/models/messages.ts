import { Phase } from "../types/phase"
import { BoardToken } from "./board"
import { State } from "./state"

type PrepareGameMessage = {
  event: 'prepare'
}

type HideRobotsMessage = {
  event: 'hide_robots'
}

type ShowRobotsMessage = {
  event: 'show_robots'
}

export type CommitStateMessage = {
  event: 'commit_state',
  state: State
}

type StartRoundStateMessage = {
  event: 'start_round'
}

type RestoreStateMessage = {
  event: 'restore_state'
}

export type ChangePhaseMessage = {
  event: 'change_phase',
  phase: Phase
}

type NextTokenMessage = {
  event: 'next_token',
  token: BoardToken
}

type EndGameMessage = {
  event: 'end_game'
}

export type Message = 
  PrepareGameMessage
    | NextTokenMessage
    | ChangePhaseMessage
    | HideRobotsMessage
    | ShowRobotsMessage
    | CommitStateMessage
    | RestoreStateMessage
    | EndGameMessage
    | StartRoundStateMessage