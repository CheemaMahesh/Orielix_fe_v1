import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../global/components/ui/button";
import { Input } from "../../global/components/ui/input";
import { Label } from "../../global/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../global/components/ui/card";
import { Separator } from "../../global/components/ui/separator";
import { Nav } from "../../Nav";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Here you would typically handle login logic
        // For demo, just simulate a loading state

        setTimeout(() => {
            setIsLoading(false);
            // Redirect or authenticate user
        }, 1500);
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic here
        console.log("Logging in with Google");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <Nav />
            <div className="pt-36 pb-20 px-6">
                <div className="max-w-md mx-auto">
                    <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                        <CardHeader className="space-y-1 text-center pb-6">
                            <div className="flex justify-center mb-2">
                                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </div>
                            </div>
                            <CardTitle className="text-2xl font-bold tracking-tight">Welcome back!</CardTitle>
                            <CardDescription className="text-gray-500">
                                Enter your credentials to access your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <form onSubmit={handleLogin}>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="h-12 px-4 rounded-xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="h-12 px-4 rounded-xl"
                                        />
                                        <div className="flex justify-end mt-1">
                                            <Link to="/forgot-password" className="text-xs text-purple-600 hover:text-purple-800 font-medium">
                                                Forgot password?
                                            </Link>
                                        </div>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-6 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl text-base font-medium"
                                    >
                                        {isLoading ? (
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : "Sign In"}
                                    </Button>
                                </div>
                            </form>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <Separator className="w-full" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                onClick={handleGoogleLogin}
                                className="w-full h-12 py-6 rounded-xl border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium flex items-center justify-center gap-2"
                            >
                                <svg className="h-5 w-5" aria-hidden="true" focusable="false" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                </svg>
                                <span>Google</span>
                            </Button>
                        </CardContent>
                        <CardFooter className="flex items-center justify-center p-6 pt-0">
                            <p className="text-center text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link to="/register" className="text-purple-600 hover:text-purple-800 font-medium">
                                    Sign up
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export { Login }; 