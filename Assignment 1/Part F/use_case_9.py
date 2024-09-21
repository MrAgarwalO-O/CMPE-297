import logging

def setup_logger():
    logging.basicConfig(level=logging.DEBUG,
                        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                        handlers=[
                            logging.FileHandler('debug.log'),
                            logging.StreamHandler()
                        ])
    return logging.getLogger()

if __name__ == '__main__':
    logger = setup_logger()
    logger.debug('This is a debug message')
    logger.info('This is an info message')
    logger.warning('This is a warning message')
    logger.error('This is an error message')
    logger.critical('This is a critical message')