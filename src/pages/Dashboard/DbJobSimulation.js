import React, { Suspense } from 'react';
import { useState, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Plane, Ring, Text, PointerLockControls, Box, useGLTF, View } from '@react-three/drei';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { OfficeDesk } from './Components/OfficeDesk';
import { FileCabinet } from './Components/FileCabinet';
import { Bookshelf } from './Components/BookShelf';
import { Ceiling, Ceiling1, Ceiling2, Ceiling3, Ceiling4 } from './Components/Ceiling';
import { Door } from './Components/Door';
import { Lamp } from './Components/Lamp';
import { Player } from './Components/Player';
import { PottedPlant } from './Components/PottedPlant';
import { Reception } from './Components/Reception';
import { Rug } from './Components/Rug';
import { Walls } from './Components/Walls';
import { Whiteboard } from './Components/Whiteboard';
import { Window } from './Components/Window';
import { Sofa, SofaTable } from './Components/Sofa';
import { SmallSofa1, SmallSofa2 } from './Components/SmallSofa';
import { TV } from './Components/Tv';
import CoffeeMachine, { CoffeeTable } from './Components/CoffeeTable';
import Painting from './Components/Paintings';
import Floor from './Components/OfficeFloor';
import Sculpture from './Components/Sculpture';
import { Section } from './Components/Sections';
import ManagersOffice, { ManagerDoor } from './Components/ManagerOffice';
import ConferenceTable from './Components/ConferenceTable';
import PresentationScreen from './Components/PresentationScreen';
import Chair from './Components/Chair';
import WallClock, { TechTrolley } from './Components/WallClock';
import WallShelf from './Components/WallShelf';
import CafeteriaCounter from './Components/CafeteriaCounter';
import FoodCounter from './Components/FoodCounter';
import DiningTable from './Components/DiningTable';
import VendingMachine from './Components/VendingMachine';
import JuiceCounter from './Components/JuiceCounter';
import CoffeeStation from './Components/CoffeeStation';
import SoftDrinkDispenser from './Components/SoftDrinkDispenser';
import { CafeteriaModel } from './Components/CafeteriaModel';
import { MeetingRoom } from './Components/MeetingRoomModel';
import { GlowingRing } from './Components/TaskIndicator';
import { HintText } from './Components/HintText';
import { DailyTaskScreen } from './Tasks/DailyTaskScreen';
import { PendantLight } from './Components/PendantLights';

const DbJobSimulation = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [currentTask, setCurrentTask] = useState(0); // Track current task
  const [hint, setHint] = useState("Go to the reception desk!"); // Initial hint
  const [dialogue, setDialogue] = useState(null); // For character dialogues
  const [showIndicator, setShowIndicator] = useState(true); // Show path indicators

  // const canvasRef = useRef();

  // const handleFullscreen = () => {
  //   const canvasContainer = canvasRef.current;
  //   if (!document.fullscreenElement) {
  //     canvasContainer.requestFullscreen().catch((err) => {
  //       console.log(`Error attempting to enable full-screen mode: ${err.message}`);
  //     });
  //   } else {
  //     document.exitFullscreen();
  //   }
  // };

  // Define tasks with target positions and hints
  const tasks = [
    {
      position: [-12.5, 0.1, 7],
      hint: "Go to the reception desk!",
      dialogue: "Hey, welcome to the office! It's your first day, right? Don't worry, everything is going to be fine. Just head to the Manager's cabin next. The office is to your right. Good luck!"
    },
    {
      position: [-0.8, 0.1, 5],
      hint: "Proceed to the office door!"
    },
    {
      position: [15.5, 0.1, 6],
      hint: "Go to Manager's cabin and meet him!",
      dialogue: "Oh, the Manager is quite busy right now with a meeting. You might want to head over to your desk and check the tasks assigned to you for today. I'll let the Manager know you stopped by."
    },
    {
      position: [14, 0.1, 14],
      hint: "Go to your desk and start work!"
    },
    {
      position: [100, 0.1, 100],
      hint: "Press 'E' to sit"
    },
  ];

  const detectionRadius = 1.5;

  // Check player proximity to the current task target and update tasks/hints/dialogues
  const checkProximity = (playerPosition) => {
    const task = tasks[currentTask];
    const distance = Math.sqrt(
      Math.pow(playerPosition[0] - task.position[0], 2) +
      Math.pow(playerPosition[2] - task.position[2], 2)
    );

    if (distance < detectionRadius) {
      if (currentTask < tasks.length - 1) {
        // Trigger dialogue if any
        if (task.dialogue) {
          setDialogue(task.dialogue); // Show dialogue when task is completed

          // Remove the dialogue after 5 seconds
          setTimeout(() => setDialogue(null), 10000);
        }

        // Move to the next task
        setCurrentTask(currentTask + 1);
        setHint(tasks[currentTask + 1].hint);
        setShowIndicator(true);
      } else {
        // Final task completed
        setHint("");
        setShowIndicator(false);
      }
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {!showCanvas ? (
        <button onClick={() => setShowCanvas(true)} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Show 3D Environment
        </button>
      ) : (
        <Canvas camera={{ position: [0, 1, 5], fov: 75 }} style={{ height: '100vh', width: '100vw' }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <PointerLockControls />

          {/* Floor */}
          <Plane args={[50, 50]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <meshStandardMaterial attach="material" color="#ffffff" />
          </Plane>

          <Player onMove={(position) => checkProximity(position)} detectionRadius={detectionRadius} onSit={DailyTaskScreen} />
          <Floor position={[0, 0.0001, 0]} image="/assets/floor.jpg" />
          {/* Room Walls */}
          <Walls />

          {/* Room Ceiling */}
          <Ceiling position={[-12.5, -10, 12.5]} scale={[8.5, 9, 8.5]} />
          <Ceiling1 position={[14.5, -10, -15]} scale={[7.2, 9, 6.8]} />
          <Ceiling2 position={[-10.7, -10, -12.5]} scale={[9.7, 9, 8.5]} />
          <Ceiling3 position={[12.5, -10, 12.5]} scale={[8.5, 9, 8.5]} />
          <Ceiling4 position={[14.5, -10, -2.1]} scale={[7.2, 9, 1.7]} />


          {/* Reception Room */}
          <Reception position={[-12.5, 0, 5]} />
          {/* Yellow Circle at Reception Desk */}
          {/* Glowing Circle Path Indicator */}
          {showIndicator && <GlowingRing position={tasks[currentTask].position} />}

          <SofaTable position={[-20, 0, 16]} />
          <CoffeeTable position={[-18, 0, 1.2]} />
          <CoffeeMachine position={[-18, 1.3, 1.2]} />
          <Rug position={[-12.5, 0, 15]} />
          <Sofa position={[-18, 0, 16]} />
          <SmallSofa1 position={[-20, 0, 13]} />
          <SmallSofa2 position={[-20, 0, 19]} />
          <TV position={[-24, 0, 16]} />
          <Painting position={[-18, 5, 1]} image="/assets/mona-lisa.jpg" />
          <Painting position={[-8, 5, 1]} image="/assets/flowers.jpg" />
          <Window position={[-24.5, 4, 20]} rotation={true} />
          <Window position={[-24.5, 4, 2.5]} rotation={true} />
          <Bookshelf position={[-24, 0, 10]} />
          <PottedPlant position={[-24, 0, 12]} />
          <PottedPlant position={[-24, 0, 8]} />
          <Sculpture position={[-2, 0, 2]} />
          <Sculpture position={[-23, 0, 2]} />
          <Sculpture position={[-23, 0, 23]} />
          <Sculpture position={[-2, 0, 23]} />
          <Door position={[-0.5, 0, 5]} rotation={[0, Math.PI / 2, 0]} />
          <Text
            position={[-0.6, 3.5, 5]}
            rotation={[0, -Math.PI / 2, 0]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Office
          </Text>


          {/* Office Room */}
          <Door position={[0.5, 0, 5]} rotation={[0, Math.PI / 2, 0]} />
          <Section position={[2, 0, 8]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[1.5, 0, 10]} rotation={[0, Math.PI / 2, 0]} />
          <Section position={[2, 0, 12]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[1.5, 0, 14]} rotation={[0, Math.PI / 2, 0]} />
          <Section position={[2, 0, 16]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[1.5, 0, 18]} rotation={[0, Math.PI / 2, 0]} />
          <Section position={[2, 0, 20]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[1.5, 0, 22]} rotation={[0, Math.PI / 2, 0]} />
          <Section position={[0.5, 0, 10]} rotation={[0, 0, 0]} />
          <Section position={[0.5, 0, 14]} rotation={[0, 0, 0]} />
          <Section position={[0.5, 0, 18]} rotation={[0, 0, 0]} />
          <Section position={[0.5, 0, 22]} rotation={[0, 0, 0]} />

          <Section position={[9, 0, 8]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[8.5, 0, 10]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[9, 0, 12]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[8.5, 0, 14]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[9, 0, 16]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[8.5, 0, 18]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[9, 0, 20]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[8.5, 0, 22]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[11, 0, 10]} rotation={[0, 0, 0]} />
          <Section position={[11, 0, 14]} rotation={[0, 0, 0]} />
          <Section position={[11, 0, 18]} rotation={[0, 0, 0]} />
          <Section position={[11, 0, 22]} rotation={[0, 0, 0]} />

          {/* <Section position={[16, 0, 8]} rotation={[0, -Math.PI/2, 0]}/>
      <OfficeDesk position={[15.5, 0, 10]} rotation={[0,-Math.PI/2, 0]}/> */}
          <Section position={[16, 0, 12]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[15.5, 0, 14]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[16, 0, 16]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[15.5, 0, 18]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[16, 0, 20]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[15.5, 0, 22]} rotation={[0, -Math.PI / 2, 0]} />
          {/* <Section position={[18, 0, 10]} rotation={[0, 0, 0]}/> */}
          <Section position={[18, 0, 14]} rotation={[0, 0, 0]} />
          <Section position={[18, 0, 18]} rotation={[0, 0, 0]} />
          <Section position={[18, 0, 22]} rotation={[0, 0, 0]} />

          {/* <Section position={[22.5, 0, 8]} rotation={[0, -Math.PI/2, 0]}/>
      <OfficeDesk position={[23, 0, 10]} rotation={[0,-Math.PI/2, 0]}/> */}
          <Section position={[22.5, 0, 12]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[23, 0, 14]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[22.5, 0, 16]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[23, 0, 18]} rotation={[0, -Math.PI / 2, 0]} />
          <Section position={[23, 0, 20]} rotation={[0, -Math.PI / 2, 0]} />
          <OfficeDesk position={[22.5, 0, 22]} rotation={[0, -Math.PI / 2, 0]} />
          {/* <Section position={[24.5, 0, 10]} rotation={[0, 0, 0]}/> */}
          <Section position={[24.5, 0, 14]} rotation={[0, 0, 0]} />
          <Section position={[24.5, 0, 18]} rotation={[0, 0, 0]} />
          <Section position={[24.5, 0, 22]} rotation={[0, 0, 0]} />

          <Sculpture position={[5.5, 0, 24]} />
          <Sculpture position={[13, 0, 24]} />
          <Sculpture position={[20, 0, 24]} />

          <ManagersOffice position={[20.5, 0, 4.5]} />
          <ManagerDoor position={[16.4, 0, 6]} rotation={[0, -Math.PI / 2, 0]} />
          <ManagerDoor position={[16.6, 0, 6]} rotation={[0, -Math.PI / 2, 0]} />
          <Text
            position={[16.3, 3.5, 6]}
            rotation={[0, -Math.PI / 2, 0]}
            fontSize={0.3}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            MANAGER
          </Text>
          <PottedPlant position={[16, 0, 1]} />
          <PottedPlant position={[16, 0, 8]} />
          <Painting position={[16.3, 4, 3]} image="/assets/hitler.jpg" rotation={[0, -Math.PI / 2, 0]} />

          {/* Conference Room */}
          <ManagerDoor position={[9.3, 0, -4.4]} rotation={[0, 0, 0]} />
          <ManagerDoor position={[10.85, 0, -4.4]} rotation={[0, Math.PI, 0]} />
          <Box args={[3.3, 7.5, 0.1]} position={[10.05, 0, -4.5]} castShadow>
            <meshStandardMaterial attach="material" color="#000000" />
          </Box>
          <Text
            position={[10, 3.3, -4.4]}
            rotation={[0, 0, 0]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            CONFERENCE ROOM
          </Text>
          <ManagerDoor position={[9.3, 0, -5.6]} rotation={[0, 0, 0]} />
          <ManagerDoor position={[10.85, 0, -5.6]} rotation={[0, Math.PI, 0]} />
          <Box args={[3.3, 7.5, 0.1]} position={[10.05, 0, -5.5]} castShadow>
            <meshStandardMaterial attach="material" color="#000000" />
          </Box>
          <Whiteboard position={[12.5, 3.5, -24]} rotation={[0, Math.PI, 0]} />
          {/* <ConferenceTable position={[15, 0, -15]} /> */}
          <Suspense fallback={null}>
            <MeetingRoom modelUrl="/model/meeting.glb" position={[26.3, 0, 3.6]} scale={[4, 2, 3]} />
          </Suspense>
          <WallClock position={[22, 8, -24.5]} rotation={[0, 0, 0]} />
          <Chair position={[13.5, 0, -13]} rotation={[0, Math.PI, 0]} />
          <Chair position={[10.5, 0, -13]} rotation={[0, Math.PI, 0]} />
          <Chair position={[7.5, 0, -13]} rotation={[0, Math.PI, 0]} />
          <Chair position={[16.5, 0, -13]} rotation={[0, Math.PI, 0]} />
          <Chair position={[19.5, 0, -13]} rotation={[0, Math.PI, 0]} />

          <Chair position={[6, 0, -15]} rotation={[0, Math.PI / 2, 0]} />

          <Chair position={[13.5, 0, -17]} rotation={[0, 0, 0]} />
          <Chair position={[10.5, 0, -17]} rotation={[0, 0, 0]} />
          <Chair position={[7.5, 0, -17]} rotation={[0, 0, 0]} />
          <Chair position={[16.5, 0, -17]} rotation={[0, 0, 0]} />
          <Chair position={[19.5, 0, -17]} rotation={[0, 0, 0]} />

          <PresentationScreen position={[24.5, 2, -15]} rotation={[0, -Math.PI / 2, 0]} />
          <FileCabinet position={[21, 0, -24]} rotation={[0, 0, 0]} />
          <WallShelf position={[16, 3, -5.8]} />
          <TechTrolley position={[23, 0, -15]} rotation={[0, Math.PI / 2, 0]} />

          {/*Cafeteria */}
          {/* <CafeteriaCounter position={[-1, -0.1, -3.7]} rotation={[0, Math.PI / 2, 0]} />
          <FoodCounter position={[-2, 0, -20]} />
          <FoodCounter position={[-10.5, 0, -20]} />
          <VendingMachine position={[-24, 0, -2]} rotation={[0, Math.PI / 2, 0]} />
          {/* <DiningTable position={[-15,0,-15]}/> */}
          {/* <JuiceCounter position={[-18, 0, -20]} />
          <CoffeeStation position={[-24, -0.3, -16]} rotation={[0, Math.PI / 2, 0]} />
          <CoffeeTable position={[-24, 0, -15]} />
          <SoftDrinkDispenser position={[3, 0, -14]} rotation={[0, -Math.PI / 2, 0]} />  */}
          <Suspense fallback={null}>
            <CafeteriaModel modelUrl="/model/restaurant.glb" position={[-13, 0.1, -12.2]} scale={[1.1, 1.1, 1.1]} />
          </Suspense>


        </Canvas>

      )}
      <HintText hint={hint} dialogue={dialogue} />
    </div>
  );
}

export default DbJobSimulation
