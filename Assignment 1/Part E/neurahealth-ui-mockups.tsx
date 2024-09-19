import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', mood: 7, stress: 5, sleep: 7 },
  { name: 'Tue', mood: 6, stress: 6, sleep: 6 },
  { name: 'Wed', mood: 8, stress: 4, sleep: 8 },
  { name: 'Thu', mood: 7, stress: 5, sleep: 7 },
  { name: 'Fri', mood: 9, stress: 3, sleep: 8 },
  { name: 'Sat', mood: 8, stress: 4, sleep: 9 },
  { name: 'Sun', mood: 8, stress: 3, sleep: 8 },
];

const NeuraHealthMockups = () => {
  return (
    <div className="p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-4">NeuraHealth UI Mockups</h1>
      
      {/* Dashboard */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-md">
            <h3 className="font-medium">Mood</h3>
            <p className="text-2xl font-bold">8/10</p>
          </div>
          <div className="bg-green-100 p-4 rounded-md">
            <h3 className="font-medium">Stress Level</h3>
            <p className="text-2xl font-bold">3/10</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-md">
            <h3 className="font-medium">Sleep Quality</h3>
            <p className="text-2xl font-bold">8/10</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
            <Line type="monotone" dataKey="stress" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sleep" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* AI Assistant Chat */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">AI Assistant Chat</h2>
        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="mb-2"><strong>User:</strong> I'm feeling anxious about my presentation tomorrow.</p>
          <p><strong>AI:</strong> I understand presentations can be nerve-wracking. Let's work on some relaxation techniques and preparation strategies to help you feel more confident. Would you like to start with a quick breathing exercise?</p>
        </div>
        <div className="flex">
          <input type="text" placeholder="Type your message..." className="flex-grow p-2 border rounded-l-md" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">Send</button>
        </div>
      </div>
      
      {/* Activity Suggestions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Personalized Activities</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="bg-green-500 text-white p-2 rounded-full mr-2">1</span>
            10-minute guided meditation
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded-full mr-2">2</span>
            Journal your thoughts for 5 minutes
          </li>
          <li className="flex items-center">
            <span className="bg-purple-500 text-white p-2 rounded-full mr-2">3</span>
            Take a 15-minute nature walk
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NeuraHealthMockups;
