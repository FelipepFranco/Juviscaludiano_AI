'use client'
import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat(){
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return(
        <Card  className="w-[440px] ">
        <CardHeader>
          <CardTitle className="p-4 bg-[url('https://cdn.discordapp.com/attachments/1085384259776294944/1085745654124531782/Riddickulo_create_a_strong_brown_frizzy-haired_headset-wearing__5695d6fd-4552-49da-a2ba-8d49f4366b9a.png?ex=65f25b70&is=65dfe670&hm=959c252ea64497ec4132e6118f45f2bfa4a7f6cb02b0f4b2d1138bfa01805133&')] bg-cover">
            <Avatar>
                <AvatarFallback>RS</AvatarFallback>
                <AvatarImage src="https://cdn.discordapp.com/attachments/1085384259776294944/1085745654124531782/Riddickulo_create_a_strong_brown_frizzy-haired_headset-wearing__5695d6fd-4552-49da-a2ba-8d49f4366b9a.png?ex=65f25b70&is=65dfe670&hm=959c252ea64497ec4132e6118f45f2bfa4a7f6cb02b0f4b2d1138bfa01805133&"></AvatarImage>
            </Avatar>
            <p className=" font-extrabold">Jucisclaudiano Bot</p>
            </CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className="">
            <ScrollArea className="h-[600px] w-full space-y-4 pr-4 ">
                {messages.map(message => {
                    return(
                        <div key={message.id} className="flex gap-2 text-slate-600 text-sm mb-4">
                            {message.role =='user' && (
                                <Avatar>
                                <AvatarFallback>DF</AvatarFallback>
                                <AvatarImage src = "https://avatars.githubusercontent.com/u/80927654?s=400&u=f835e23fbb332f3f114e393250dd0a01c8577cf8&v=4"></AvatarImage>
                                </Avatar>
                            )}
                            {message.role =='assistant' && (
                                    <Avatar>
                                    <AvatarFallback>RS</AvatarFallback>
                                    <AvatarImage src="https://cdn.discordapp.com/attachments/1085384259776294944/1085745654124531782/Riddickulo_create_a_strong_brown_frizzy-haired_headset-wearing__5695d6fd-4552-49da-a2ba-8d49f4366b9a.png?ex=65f25b70&is=65dfe670&hm=959c252ea64497ec4132e6118f45f2bfa4a7f6cb02b0f4b2d1138bfa01805133&"></AvatarImage>
                                </Avatar>
                            )}
                            
                                
                        <p className="leading-relaxed ">
                            <span className=" block font-bold text-slate-700">
                                { message.role == 'user' ? 'Usuário' : 'Juvisclaudiano BOT' }
                                </span>
                                {message.content}
                        </p>
                    </div>
                    )
                })}
            </ScrollArea>
        </CardContent>
        <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange}/>
          <Button type="submit">send</Button>
            </form>
        </CardFooter>
      </Card>
    )
}