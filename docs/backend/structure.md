backend/
├─ src/
│ ├─ core/
│ │ ├─ domain/
│ │ │ ├─ user.entity.js
│ │ │ └─ message.entity.js
│ │ ├─ usecases/
│ │ │ ├─ create-user.usecase.js
│ │ │ └─ send-message.usecase.js
│ ├─ adapters/
│ │ ├─ controllers/
│ │ │ ├─ user.controller.js
│ │ │ └─ chat.controller.js
│ │ └─ repositories/
│ │ ├─ user.repository.js
│ │ └─ message.repository.js
│ ├─ infrastructure/
│ │ ├─ db/
│ │ │ ├─ migrations/
│ │ │ └─ models/ (ou schemas)
│ │ ├─ webserver/
│ │ │ ├─ express.js
│ │ │ └─ websocket.js
│ │ └─ config/
│ ├─ app.js
│ └─ index.js
├─ test/
│ ├─ unit/
│ ├─ integration/
│ └─ ...
└─ package.json
