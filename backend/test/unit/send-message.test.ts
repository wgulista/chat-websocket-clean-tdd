describe('SendMessageUseCase', () => {
    it('should return a message to exist conversation', async () => {
        const conversationId = 1;
        const senderId = 10;
        const text = 'Hello !';
        const mockRepository = {
            saveMessage: jest
                .fn()
                .mockResolvedValue({ id: 100, text, senderId, conversationId }),
        };
        const sendMessageUseCase = new SendMessageUseCase(mockRepository);

        const result = await sendMessageUseCase.execute(
            conversationId,
            senderId,
            text,
        );

        expect(result.text).toBe('Hello !');
        expect(mockRepository.saveMessage).toHaveBeenCalled();
    });
});
