import Ably from 'ably/build/ably-webworker.min'

const client = new Ably.Realtime({ 
    authUrl: '',
    authHeaders: {
      authorization: '',
      workspace: '',
    }
 })

client.connection.on('connected', () => {
  console.log('connected');
});