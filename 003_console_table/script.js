const freddie = { name: 'Freddie Mercury', position: ['Lead Vocals'], activeMember: false };
const john = { name: 'John Deacon', position: ['Bass Guitarist'], activeMember: false };
const brian = { name: 'Brian May', position: ['Lead Guitar'], activeMember: true };
const roger = { name: 'Roger Taylor', position: ['Drummer'], activeMember: true };

console.table([freddie, john, brian, roger]);

// Result:
// ┌─────────┬───────────────────┬──────────────────────┬──────────────┐
// │ (index) │       name        │       position       │ activeMember │
// ├─────────┼───────────────────┼──────────────────────┼──────────────┤
// │    0    │ 'Freddie Mercury' │  [ 'Lead Vocals' ]   │    false     │
// │    1    │   'John Deacon'   │ [ 'Bass Guitarist' ] │    false     │
// │    2    │    'Brian May'    │  [ 'Lead Guitar' ]   │     true     │
// │    3    │  'Roger Taylor'   │    [ 'Drummer' ]     │     true     │
// └─────────┴───────────────────┴──────────────────────┴──────────────┘

