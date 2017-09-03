1- Mission critical applications where error handling is of prime concern.
Reason:
Nodejs doesn't provide any better exception handling mechanism rather it crashes the app in case of un-handled exceptions. Talking about other contemporary languages like java which provides an excellent exception handling mechanism. In Java even if you don't happen to catch an exception all it'll do is fail your request, it won't completely crash your app.

My opinion: 
My opinion on this is straightforward. Developer will have to pay very close attention on every bit of code which might generate any exception. Even on those exceptions which may seem impossible because in most of the cases the reasonably looking solutions can be easily invalidated. There is a way in nodejs which enables the developer to handle any un-handled exceptions.
      process.on("uncaughtException", callback);
You can write your exception handling code in the callback here. This line will catch every un-handled exception. But be aware with the fact that this line catches any un-handled exception means your app is in unstable state so keeping your app running in this state may lead the app to show unexpected behavior.

2- CPU Intensive work like MMO Game Servers.
Reason:
Nodejs isn't suitable for writing highly busy game servers because of its being single threaded. As whenever a request comes to nodejs server and if the request is CPU bound then the nodejs because of its single threaded nature wouldn't entertain any other request as long as the V8 is busy crunching the first request. This causes the requests to starve. Consider the case of Fibonacci servers with large numbers where each request take considerable time to find Fibonacci series till then others have to wait. In the other contemporary languages which are milti threaded like java we can spawn a child to do the intensive works meanwhile we can entertain the other requests.

My opinion:
At this point I have many opinions. As I am a game developer and currently using nodejs for the game servers. I have come to know the secret which enables me to use nodejs for game servers even if it is a MMO Game. The idea is to break the tasks into such a manageable modules which themselves can be run on separate servers. This way the notion of asynchronous computing retains and we can manage the servers better. In this model the task is carried not only on one server but more than on servers leaving the previous servers idle for other requests.
The another solution which is popular in the market is to delegate the cpu intensive works to other servers which are running multi threaded languages which can do the work by breaking then into threads. Again this approach is almost similar to what I explained above. But here is some problems the organization will have to hire the developers of that particular language and along with nodejs developers and many more.
