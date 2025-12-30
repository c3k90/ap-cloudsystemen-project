"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Play,
  Triangle,
  PawPrint,
  Grid3X3,
  Gamepad2,
  Timer,
  Zap,
  Target,
  Square,
  Palette,
  Rocket,
  Brain,
  Bomb,
  BookOpen,
  Sparkles,
  Coins,
  Circle,
  Calculator,
  Keyboard,
} from "lucide-react"
import { Button, Card, CardDescription, CardTitle } from "@repo/ui"
import TypingSpeedGame from "./games/typing-speed-game"
import Puzzle2048Game from "./games/puzzle-2048-game"
import SimonSaysGame from "./games/simon-says-game"
import WhackAMoleGame from "./games/whack-a-mole-game"
import CoinCollectorGame from "./games/coin-collector-game"
import BubblePopGame from "./games/bubble-pop-game"
import WordScrambleGame from "./games/word-scramble-game"
import ConnectFourGame from "./games/connect-four-game"
import MemoryMatchGame from "./games/memory-match-game"
import MinesweeperGame from "./games/minesweeper-game"
import FlappyTriangle from "./games/flappy-triangle"
import DinoGame from "./games/dino-game"
import SnakeGame from "./games/snake-game"
import PongGame from "./games/pong-game"
import ReactionGame from "./games/reaction-game"
import TetrisGame from "./games/tetris-game"
import BreakoutGame from "./games/breakout-game"
import OrbitDefense from "./games/orbit-defence"
import ColorMatchGame from "./games/color-match-game"
import SpaceInvadersGame from "./games/space-invaders-game"
import TicTacToeGame from "./games/tic-tac-toe-game"
import QuickMathGame from "./games/quick-math-game"

type GameType =
  | "menu"
  | "2048"
  | "simon-says"
  | "whack-a-mole"
  | "coin-collector"
  | "bubble-pop"
  | "word-scramble"
  | "flappy"
  | "dino"
  | "snake"
  | "pong"
  | "reaction"
  | "tetris"
  | "breakout"
  | "orbit-defense"
  | "color-match"
  | "space-invaders"
  | "tic-tac-toe"
  | "memory-match"
  | "minesweeper"
  | "connect-four"
  | "quick-math"
  | "typing-speed"

type Category = "All" | "Arcade" | "Puzzle" | "Strategy" | "Action"

export default function GameDashboard() {
  const [currentGame, setCurrentGame] = useState<GameType>("menu")
  const [selectedCategory, setSelectedCategory] = useState<Category>("All")

  const games = [
    {
      id: "typing-speed" as const,
      title: "Typing Speed",
      description: "Test your typing speed and accuracy with timed challenges!",
      icon: Keyboard,
      color: "bg-chart-2",
      themeColor: "#14b8a6",
      category: "Action" as const,
      isNew: true,
    },
    {
      id: "2048" as const,
      title: "2048",
      description: "Slide numbered tiles to reach 2048 - addictive puzzle challenge!",
      icon: Grid3X3,
      color: "bg-chart-4",
      themeColor: "#f59e0b",
      category: "Puzzle" as const,
      isNew: true,
    },
    {
      id: "simon-says" as const,
      title: "Simon Says",
      description: "Watch the pattern and repeat it back - test your memory!",
      icon: Brain,
      color: "bg-game-highlight",
      themeColor: "#9333ea",
      category: "Action" as const,
      isNew: true,
    },
    {
      id: "whack-a-mole" as const,
      title: "Whack-a-Mole",
      description: "Quick reflexes needed - whack the moles before they hide!",
      icon: Target,
      color: "bg-success",
      themeColor: "#22c55e",
      category: "Action" as const,
      isNew: true,
    },
    {
      id: "connect-four" as const,
      title: "Connect Four",
      description: "Drop pieces to get four in a row - play vs friends or CPU",
      icon: Circle,
      color: "bg-error",
      themeColor: "#ef4444",
      category: "Strategy" as const,
      isNew: true,
    },
    {
      id: "word-scramble" as const,
      title: "Word Scramble",
      description: "Unscramble letters to form words quickly",
      icon: BookOpen,
      color: "bg-game-highlight",
      themeColor: "#8b5cf6",
      category: "Puzzle" as const,
      isNew: true,
    },
    {
      id: "memory-match" as const,
      title: "Memory Match",
      description: "Match pairs of cards with memory",
      icon: Brain,
      color: "bg-chart-5",
      themeColor: "#ec4899",
      category: "Puzzle" as const,
    },
    {
      id: "coin-collector" as const,
      title: "Coin Collector",
      description: "Jump and collect coins in this platformer adventure",
      icon: Coins,
      color: "bg-warning",
      themeColor: "#f59e0b",
      category: "Arcade" as const,
    },
    {
      id: "bubble-pop" as const,
      title: "Bubble Pop",
      description: "Pop colorful bubbles and build combos",
      icon: Sparkles,
      color: "bg-chart-2",
      themeColor: "#4ecdc4",
      category: "Arcade" as const,
    },
    {
      id: "minesweeper" as const,
      title: "Minesweeper",
      description: "Clear the board without hitting mines",
      icon: Bomb,
      color: "bg-muted-foreground",
      themeColor: "#374151",
      category: "Strategy" as const,
    },
    {
      id: "flappy" as const,
      title: "Triangle",
      description: "Navigate through obstacles with precise timing.",
      icon: Triangle,
      color: "bg-warning",
      themeColor: "#f59e0b",
      category: "Arcade" as const,
    },
    {
      id: "dino" as const,
      title: "Sheep Run",
      description: "Jump over cacti and dodge flying birds.",
      icon: PawPrint,
      color: "bg-muted-foreground",
      themeColor: "#374151",
      category: "Arcade" as const,
    },
    {
      id: "snake" as const,
      title: "Snake",
      description: "A modern, minimalistic take on the classic.",
      icon: Grid3X3,
      color: "bg-success",
      themeColor: "#22c55e",
      category: "Arcade" as const,
    },
    {
      id: "pong" as const,
      title: "Pong",
      description: "The timeless arcade classic. Play against an AI.",
      icon: Gamepad2,
      color: "bg-info",
      themeColor: "#3b82f6",
      category: "Arcade" as const,
    },
    {
      id: "reaction" as const,
      title: "Reaction Time",
      description: "Test your reflexes. How fast can you click?",
      icon: Timer,
      color: "bg-error",
      themeColor: "#ef4444",
      category: "Action" as const,
    },
    {
      id: "tetris" as const,
      title: "Tetris",
      description: "Stack falling blocks to clear lines and score high.",
      icon: Square,
      color: "bg-game-highlight",
      themeColor: "#a855f7",
      category: "Puzzle" as const,
    },
    {
      id: "breakout" as const,
      title: "Breakout",
      description: "Break all the bricks with your ball and paddle.",
      icon: Zap,
      color: "bg-chart-1",
      themeColor: "#f97316",
      category: "Arcade" as const,
    },
    {
      id: "orbit-defense" as const,
      title: "Orbit Defense",
      description: "Strategic tower defense in the vastness of space.",
      icon: Target,
      color: "bg-chart-4",
      themeColor: "#6366f1",
      category: "Strategy" as const,
    },
    {
      id: "color-match" as const,
      title: "Color Match",
      description: "Match the target color as fast as you can!",
      icon: Palette,
      color: "bg-chart-5",
      themeColor: "#ec4899",
      category: "Action" as const,
    },
    {
      id: "space-invaders" as const,
      title: "Space Invaders",
      description: "Defend Earth from waves of alien invaders in this classic arcade shooter.",
      icon: Rocket,
      color: "bg-chart-2",
      themeColor: "#06b6d4",
      category: "Action" as const,
    },
    {
      id: "tic-tac-toe" as const,
      title: "Tic Tac Toe",
      description: "Classic strategy game - get three in a row to win!",
      icon: Grid3X3,
      color: "bg-chart-2",
      themeColor: "#10b981",
      category: "Strategy" as const,
    },
    {
      id: "quick-math" as const,
      title: "Quick Math",
      description: "Answer as many math questions as you can in 60 seconds.",
      icon: Calculator,
      color: "bg-info",
      themeColor: "#0ea5e9",
      category: "Puzzle" as const,
      isNew: true,
    },
  ]

  const categories: Category[] = ["All", "Arcade", "Puzzle", "Strategy", "Action"]

  const filteredGames = selectedCategory === "All" ? games : games.filter((game) => game.category === selectedCategory)

  const renderGame = () => {
    const gameData = games.find((g) => g.id === currentGame)
    const commonProps = {
      onBack: () => setCurrentGame("menu"),
      themeColor: gameData ? gameData.themeColor : "#000000",
    }
    switch (currentGame) {
      case "typing-speed":
        return <TypingSpeedGame {...commonProps} />
      case "2048":
        return <Puzzle2048Game {...commonProps} />
      case "simon-says":
        return <SimonSaysGame {...commonProps} />
      case "whack-a-mole":
        return <WhackAMoleGame {...commonProps} />
      case "coin-collector":
        return <CoinCollectorGame {...commonProps} />
      case "bubble-pop":
        return <BubblePopGame {...commonProps} />
      case "word-scramble":
        return <WordScrambleGame {...commonProps} />
      case "connect-four":
        return <ConnectFourGame {...commonProps} />
      case "memory-match":
        return <MemoryMatchGame {...commonProps} />
      case "minesweeper":
        return <MinesweeperGame {...commonProps} />
      case "flappy":
        return <FlappyTriangle {...commonProps} />
      case "dino":
        return <DinoGame {...commonProps} />
      case "snake":
        return <SnakeGame {...commonProps} />
      case "pong":
        return <PongGame {...commonProps} />
      case "reaction":
        return <ReactionGame {...commonProps} />
      case "tetris":
        return <TetrisGame {...commonProps} />
      case "breakout":
        return <BreakoutGame {...commonProps} />
      case "orbit-defense":
        return <OrbitDefense {...commonProps} />
      case "color-match":
        return <ColorMatchGame {...commonProps} />
      case "space-invaders":
        return <SpaceInvadersGame {...commonProps} />
      case "tic-tac-toe":
        return <TicTacToeGame {...commonProps} />
      case "quick-math":
        return <QuickMathGame {...commonProps} />
      default:
        return null
    }
  }

  if (currentGame !== "menu") {
    return (
      <div className="relative w-full h-full">
        <Button
          onClick={() => setCurrentGame("menu")}
          variant="outline"
          size="sm"
          className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Menu
        </Button>
        {renderGame()}
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-4">
            Crafted with v0.dev by{" "}
            <a
              href="https://x.com/c3k90"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-2"
            >
              c3k90
            </a>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Mini Game Arcade</h1>
          <p className="text-muted-foreground text-lg">A collection of simple games build with v0.dev</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <Card
              key={game.id}
              className="group relative overflow-hidden rounded-xl border hover:border-foreground/20 transition-all duration-200 cursor-pointer bg-card hover:shadow-lg"
              onClick={() => setCurrentGame(game.id)}
            >
              {game.isNew && (
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full z-10">
                  NEW
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg text-white" style={{ backgroundColor: game.themeColor }}>
                    <game.icon className="w-5 h-5" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-card-foreground">{game.title}</CardTitle>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {game.category}
                    </span>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {game.description}
                  </CardDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
