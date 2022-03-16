import React, { useCallback } from 'react'
import '../App.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

// components
import TestPage from './TestPage'
import Layout from './Layout'
import StateSample from './StateSample'
import RefSample from './RefSample'
import EffectSample from './EffectSample'
import { useRecoilValue } from 'recoil'
import { NumState } from '../contexts/AppAtom'
import axios, { Axios, AxiosError } from 'axios'

// function App() {
const Home = () => {
  // react-router-dom hooks
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  // GlobalState recoil
  const num = useRecoilValue(NumState)

  // GET Data
  const getData = useCallback((url: string) => {
    axios
      .get(url)
      .then((res) => console.log(res.data))
      .catch((e: AxiosError) => console.log('Error', e.message))
  }, [])

  return (
    <Layout>
      {/* Concept */}
      <div className='py-5'>
        <h1 className='text-3xl'>Practice</h1>
      </div>

      {/* Agenda */}
      <div>
        <ul className='pb-5 border-b-2 border-gray-500'>
          <li>Component</li>
          <li>Hooks</li>
          <li>Routing</li>
        </ul>
      </div>

      {/* Practice */}
      <div className='bg-blue-100 my-5 px-3 pb-3'>
        <div className='my-3'>
          <h2 className='text-xl underline'>Practice zone</h2>
        </div>
        <div className='px-3 my-2'>
          <p>Component</p>
          <div className='px-10'>
            <TestPage />
            <TestPage msg='Hello' />
          </div>
        </div>
        <div className='px-3 my-2'>
          <p>Hooks</p>
          <div className='px-10'>
            <p>useState</p>
            <div className='px-10'>
              <StateSample />
            </div>
            <p>useRef</p>
            <div className='px-10'>
              <RefSample />
            </div>
            <p>useEffect</p>
            <div className='px-10'>
              <EffectSample />
            </div>
            <p>React-router-dom</p>
            <div className='px-10'>
              <p>useNavigate</p>
              <div className='px-10'>
                <div className='flex justify-center items-center p-5'>
                  <div className='mx-5 border-2 border-green-500'>
                    <button
                      type='button'
                      className='p-3'
                      onClick={() => navigate('/about')}
                    >
                      About
                    </button>
                  </div>
                  <div className='mx-5 border-2 border-green-500'>
                    <button
                      type='button'
                      className='p-3'
                      onClick={() => navigate('/task')}
                    >
                      Task
                    </button>
                  </div>
                  <div className='mx-5 border-2 border-green-500'>
                    <button
                      type='button'
                      className='p-3'
                      onClick={() => navigate('/contact')}
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
              <p>useLocation</p>
              <div className='flex justify-center items-center'>
                <button
                  type='button'
                  className='p-5 rounded-xl bg-cyan-400 hover:bg-cyan-600'
                  onClick={() => console.log(location)}
                >
                  useLocation
                </button>
              </div>
              <p>useParams</p>
              <div className='flex justify-center items-center'>
                <button
                  type='button'
                  className='p-5 rounded-xl bg-cyan-400 hover:bg-cyan-600'
                  onClick={() => console.log(params)}
                >
                  useRarams
                </button>
              </div>
            </div>
            <p>useCallback</p>
            <p>memo</p>
            <p className='line-through'>useReducer</p>
            <p className='line-through'>useContext</p>
          </div>
        </div>
        <div className='px-3 my-2'>
          <p>Routing</p>
          <div className='px-10'>
            <div className='flex justify-center items-center p-5'>
              <div className='mx-5 border-2 border-green-500'>
                <Link to={'/about'} className='block p-3'>
                  About
                </Link>
              </div>
              <div className='mx-5 border-2 border-green-500'>
                <Link to={'/task'} className='block p-3'>
                  Task
                </Link>
              </div>
              <div className='mx-5 border-2 border-green-500'>
                <Link to={'/contact'} className='block p-3'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='px-3 my-2'>
          <p>GlobalState</p>
          <div className='px-10'>
            <button
              type='button'
              className='p-3 border-2 border-red-300 hover:bg-pink-500'
              onClick={() => console.log('Recoil value is ', num)}
            >
              Check global state number
            </button>
          </div>
        </div>
        <div className='px-3 my-2'>
          <p>axios</p>
          <div className='px-10'>
            <button
              type='button'
              className='p-3 border-2 border-red-300 hover:bg-red-500'
              // onClick={() => getData('')}
              // onClick={() => getData('http://localhost:3000')}
              onClick={() =>
                getData('https://jsonplaceholder.typicode.com/todos')
              }
            >
              GET DATA
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
