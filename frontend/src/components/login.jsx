import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router'
import toast from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from "lucide-react"

function Login() {
    const navigate = useNavigate()

    const [login, setLogin] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const handleLogin = () => {
        setLogin(!login)
        setName("")
        setEmail("")
        setPassword("")
        setShowPassword(false)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if (login) {
            // login
            try {
                const res = await axios.post("/api/user/login", { email, password }, { withCredentials: true })
                if (res?.data?.success) {
                    localStorage.setItem("token", res?.data?.token);
                    toast.success(res?.data?.msg)
                    navigate("/clock")
                }
            } catch (err) {
                console.log("error while login in frontend: ", err);
                toast.error(
                    err?.response?.data?.msg || 
                    err?.message || 
                    "Something went wrong"
                )
            }
        } else {
            // sign up
            try {
                const res = await axios.post("/api/user/signup", { name, email, password }, { withCredentials: true })
                if (res?.data?.success) {
                    toast.success(res?.data?.msg)
                    setLogin(true)
                }
            } catch (err) {
                console.log("error while signup in frontend: ", err);
                toast.error(
                    err?.response?.data?.msg || 
                    err?.message || 
                    "Something went wrong"
                )
            }
        }
    }

    return (
        <div className="h-screen w-screen overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full w-full">
                
                {/* Showcase Side (Left - Desktop Only) */}
                <div 
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="lg:col-span-6 xl:col-span-7 relative hidden lg:flex flex-col justify-between p-12 bg-black text-white overflow-hidden select-none border-r border-neutral-900/50 cursor-default"
                >
                    
                    {/* Spotlight glow tracking mouse pointer */}
                    <div 
                        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 80%)`
                        }}
                    />

                    {/* Background Dither Image (Higher Opacity and Visibility) */}
                    <img 
                        src="/dither.jpg" 
                        alt="Dither Illustration"
                        className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity filter contrast-150 brightness-100 pointer-events-none" 
                    />

                    {/* Overlay Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-950/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-l from-neutral-950/60 to-transparent z-10" />
                    
                    {/* Graphic Grid lines overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-10" />

                    

                    {/* Quotes Accent */}
                    <div className="relative z-30 my-auto max-w-lg mx-auto text-center px-4">
                        <p className="font-instrumental text-[clamp(1.75rem,3.5vw,3.25rem)] font-light italic leading-tight text-neutral-250">
                            "Focus is the art of choosing what to ignore."
                        </p>
                        <div className="w-12 h-[1px] bg-neutral-850 mx-auto my-6" />
                        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 font-sans">
                            Timmo Workspace
                        </p>
                    </div>

                    {/* Empty Bottom Space for layout spacing */}
                    <div className="relative z-30" />

                </div>

                {/* Form Side (Right) */}
                <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between p-6 sm:p-10 md:p-12 bg-[#0d0d0d] text-white relative overflow-y-auto no-scrollbar">
                    
                    {/* Top Navigation */}
                    <div className="flex items-center justify-between w-full mb-4 z-10">
                        <button 
                            id="login-back-btn"
                            onClick={() => navigate('/')}
                            className="group flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-white transition cursor-pointer"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                            Back
                        </button>
                    </div>

                    {/* Form Component Container */}
                    <div className="my-auto py-6 max-w-md w-full mx-auto z-10 flex flex-col">
                        
                        {/* Custom 'timmo' logo text with letter-spacing transition on hover */}
                        <h2 className="font-gothic text-4xl tracking-widest hover:tracking-[0.25em] text-white text-center mb-10 select-none uppercase transition-all duration-500 cursor-default">
                            timmo
                        </h2>

                        <form onSubmit={submitHandler} className="space-y-4">
                            <AnimatePresence mode="wait">
                                {!login && (
                                    <motion.div
                                        key="name-field"
                                        initial={{ opacity: 0, height: 0, y: -10 }}
                                        animate={{ opacity: 1, height: "auto", y: 0 }}
                                        exit={{ opacity: 0, height: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-1.5 overflow-hidden"
                                    >
                                        <label className="text-xs text-neutral-400 font-semibold font-sans block mb-2 tracking-wide">Name</label>
                                        <div className="relative flex items-center">
                                            <User className="w-4.5 h-4.5 text-neutral-600 absolute left-3.5 pointer-events-none" />
                                            <input
                                                id="signup-name-input"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Your name"
                                                type="text"
                                                required
                                                minLength={2}
                                                maxLength={100}
                                                className="w-full bg-[#161616] border border-neutral-800/80 text-base text-white pl-11 pr-4 py-3.5 rounded-xl outline-none focus:border-neutral-500 transition font-sans font-medium placeholder:text-neutral-600"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-1.5">
                                <label className="text-xs text-neutral-400 font-semibold font-sans block mb-2 tracking-wide">Email</label>
                                <div className="relative flex items-center">
                                    <Mail className="w-4.5 h-4.5 text-neutral-600 absolute left-3.5 pointer-events-none" />
                                    <input
                                        id="login-email-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="hello@0.email"
                                        type="email"
                                        required
                                        maxLength={100}
                                        className="w-full bg-[#161616] border border-neutral-800/80 text-base text-white pl-11 pr-4 py-3.5 rounded-xl outline-none focus:border-neutral-500 transition font-sans font-medium placeholder:text-neutral-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs text-neutral-400 font-semibold font-sans block mb-2 tracking-wide">Password</label>
                                <div className="relative flex items-center">
                                    <Lock className="w-4.5 h-4.5 text-neutral-600 absolute left-3.5 pointer-events-none" />
                                    <input
                                        id="login-password-input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        minLength={login ? undefined : 3}
                                        maxLength={72}
                                        className="w-full bg-[#161616] border border-neutral-800/80 text-base text-white pl-11 pr-10 py-3.5 rounded-xl outline-none focus:border-neutral-500 transition font-sans font-medium placeholder:text-neutral-600"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 text-neutral-600 hover:text-neutral-450 transition cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                                    </button>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full !mt-8 bg-white text-black py-3.5 rounded-xl text-sm font-bold hover:bg-neutral-200 transition-all duration-200 cursor-pointer shadow active:scale-[0.98]"
                            >
                                {login ? "Login" : "Sign Up"}
                            </button>
                        </form>

                        {/* Toggle Link */}
                        <p className="text-center text-xs text-neutral-500 mt-6 font-sans">
                            {login ? "Don't have an account? " : "Already have an account? "}
                            <button 
                                onClick={handleLogin} 
                                className="font-semibold text-neutral-300 hover:text-white hover:underline cursor-pointer ml-0.5"
                            >
                                {login ? "Sign up" : "Login"}
                            </button>
                        </p>
                    </div>

                    {/* Footer spacer */}
                    <div className="h-6" />
                </div>

            </div>
        </div>
    )
}

export default Login



