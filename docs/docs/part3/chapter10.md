---
sidebar_position: 3
---

# Chapter 10: Robot Actuators and Sensors

Actuators and sensors are the "muscles" and "senses" of a robot, respectively. They are the components that allow a robot to interact with its environment and to perceive the world around it. In this chapter, we will explore the different types of actuators and sensors that are used in robotics.

## Actuators

An actuator is a component of a machine that is responsible for moving and controlling a mechanism or system. In robotics, actuators are used to produce motion in the robot's joints.

There are several types of actuators used in robotics:

*   **Electric Motors**: These are the most common type of actuator used in robotics. They are relatively inexpensive, efficient, and easy to control. Common types of electric motors include DC motors, stepper motors, and servo motors.
*   **Hydraulic Actuators**: These actuators use a fluid, typically oil, to produce motion. They are capable of producing very large forces, but they are also more complex and expensive than electric motors.
*   **Pneumatic Actuators**: These actuators use compressed air to produce motion. They are relatively inexpensive and simple, but they are not as precise as electric or hydraulic actuators.
*   **Smart Material Actuators**: These actuators are made from materials that can change their shape or size in response to an external stimulus, such as an electric field or a change in temperature. Examples include piezoelectric actuators, electroactive polymers (EAPs), and shape-memory alloys (SMAs).

## Sensors

A sensor is a device that detects and responds to some type of input from the physical environment. In robotics, sensors are used to provide information to the robot's control system about the robot's state and the state of the environment.

There are many different types of sensors used in robotics:

*   **Proprioceptive Sensors**: These sensors measure the internal state of the robot, such as the position, velocity, and acceleration of its joints.
*   **Exteroceptive Sensors**: These sensors measure the state of the environment around the robot. Examples include:
    *   **Vision Sensors (Cameras)**: Provide visual information about the environment.
    *   **LIDAR (Light Detection and Ranging)**: Measures distance by illuminating a target with a laser and analyzing the reflected light.
    *   **Sonar**: Uses sound waves to measure distance.
    *   **Tactile Sensors**: Measure force and pressure.
    *   **Proximity Sensors**: Detect the presence of nearby objects without any physical contact.

### Code Example: Reading from a Simulated Sensor

```python
import time
import random

class SimulatedTemperatureSensor:
    def __init__(self, initial_temp=25.0, temp_range=(20.0, 30.0)):
        self.temperature = initial_temp
        self.temp_range = temp_range

    def read_temperature(self):
        # Simulate temperature fluctuations
        self.temperature += random.uniform(-0.1, 0.1)
        # Keep temperature within the range
        self.temperature = max(self.temp_range[0], min(self.temperature, self.temp_range[1]))
        return self.temperature

# Create a sensor instance
temp_sensor = SimulatedTemperatureSensor()

# Read from the sensor every second
while True:
    current_temp = temp_sensor.read_temperature()
    print(f"Current temperature: {current_temp:.2f}°C")
    time.sleep(1)
```

### References

1.  [STM Journals - A Review on Sensors and Actuators in Robotics](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFfLWvsHUFIDk6osZDnMdW1ZTArqFSDAkEfqpJ91b_ToKPPOrzzZWkzmaJFe6fysftzc74oKMiSAL04c1fNlVdjlxSDKdn-O6h6UZsFJ_6pgnkuyZfupMSr4-5mZYZMW2g0GC1Yx0YcshhmGfGs6viJ-4ClqMuLIhx92lY=)
2.  [Wevolver - A Guide to Robotic Actuators](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGwlJcxEd6zs0O1kqTq99el0q4d3X3ULyVXRs_8HhSITJ2Girxdbl_qiPK7yjXutYmeQoe94R9uLL12be97GtLEZycth-FerDzCU22F2iD2A5HLKCnfY4oS_8ChdhE3FKwCvNFGM_jaO5rER4cE3LSOLmvKoyLnsAi68F617Jv4VQSmnECdNDfWlyrHFhCn6i7VDKguMGFPM9XZ1w==)
